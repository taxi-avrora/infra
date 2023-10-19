const
    config = require('../../config'),
    VKontakteStrategy = require('passport-vkontakte').Strategy,

    // Модели Mongoose
    Users = require('../../models/users');

module.exports = (passport) => {
    // Стратегия входа через ВК
    var options = {
        clientID: config.vk.client_id,
        clientSecret: config.vk.client_secret,
        callbackURL: config.vk.callback_url,
        scope: config.vk.scope,
        profileFields: config.vk.profile_fields
    };
    passport.use(new VKontakteStrategy(options, async(accessToken, refreshToken, params, profile, done) => {
        var userData = {
            vk_id: profile.id,
            vk_email: params.email,
            first_name: profile._json.first_name,
            last_name: profile._json.last_name,
            photo_200: profile._json.photo_200_orig
        };

        // Проверяем есть ли в БД такой пользователь
        try {
            var hasUser = await Users.findOne({ vk_id: profile.id }),
                user;

            // Сохраняем/обновляем инфо о пользователе
            hasUser ?
                user = await Users.findOneAndUpdate({ vk_id: profile.id }, userData) :
                user = await new Users(userData).save();

            return done(null, user);
        } catch (e) {
            console.log('Стратегия входа через VK', e);
            return done(e, null);
        }
    }));

    passport.serializeUser((user, cb) => {
        cb(null, user._id);
    });

    passport.deserializeUser(async(id, cb) => {
        try {
            var user = await Users.findById(id);

            return cb(null, user);
        } catch (err) {
            return cb(err);
        }
    });
};
