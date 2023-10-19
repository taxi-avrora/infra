const
    render = require('../render').render,

    // Роутинг
    routeAuth = require('./auth'),
    routeMain = require('./main'),
    routeAdmin = require('./admin'),
    routeApi = require('./api');


module.exports = app => {
    // Общие данные
    app.use((req, res, next) => {
        res.DATA = {
            bundle: 'desktop',
            user: req.user
        };
        next();
    });

    app
        .use(routeAuth)
        .use('/', routeMain)
        .use('/admin', routeAdmin)
        .use('/api', routeApi);

    // 404
    app.use('*', (req, res) => {
        res.DATA.template = 'default';
        res.DATA.page = '404';
        res.DATA.title = 'Страница не найдена';

        res.status(404);
        render(req, res, res.DATA);
    });
}
