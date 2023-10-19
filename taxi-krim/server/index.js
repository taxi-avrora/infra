Object.assign || (Object.assign = require('object-assign'));

var fs = require('fs'),
    path = require('path'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    serveStatic = require('serve-static'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session'),
    slashes = require('connect-slashes'),
    passport = require('passport'),
    csrf = require('csurf'),
    compression = require('compression'),
    mongoose = require('mongoose'),

    config = require('./config'),
    passportStrategies = require('./routes/auth/passport-strategies'),

    staticFolder = config.staticFolder,
    port = process.env.PORT || config.defaultPort,
    isSocket = isNaN(port),
    isDev = config.env.env === 'development';

// Подключение к MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb, {
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 3000
});

require('debug-http')();

app
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(compression())
    .use(favicon(path.join(staticFolder, 'favicon.ico')))
    .use(serveStatic(staticFolder))
    .use(morgan('combined'))
    .use(cookieParser())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(expressSession({
        resave: true,
        saveUninitialized: true,
        secret: config.sessionSecret
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use(csrf());

// NOTE: conflicts with livereload
isDev || app.use(slashes());

// Стратегии входа на сайт
passportStrategies(passport);

// Роутинг
require('./routes')(app);

isDev && require('./rebuild')(app);

isSocket && fs.existsSync(port) && fs.unlinkSync(port);

app.listen(port, function() {
    isSocket && fs.chmod(port, '0777');
    console.log('Server is listening on', this.address().port);
});
