const express = require("express"),
    passport = require("passport");

var app = express.Router();

// Вход через ВК
app.get("/vk", passport.authenticate("vkontakte"));
app.get("/vk/callback", (req, res, next) => {
    passport.authenticate("vkontakte", (err, user) => {
        if (err) {
            console.log("Ошибка во время авторизации через ВК", err);
            return res.redirect("/");
        }

        req.logIn(user, (errLogin) => {
            if (errLogin) {
                console.log(
                    "Ошибка при попытке залогинить пользователя",
                    errLogin
                );
            }

            return res.redirect("/admin");
        });
    })(req, res, next);
});

// Выход
app.get("/exit", (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = app;
