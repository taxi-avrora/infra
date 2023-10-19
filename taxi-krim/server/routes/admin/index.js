const express = require("express"),
    render = require("../../render").render,
    config = require("../../config"),
    // Роутеры
    routePrice = require("./price");

var app = express.Router();

// Проверка на админа
app.use((req, res, next) => {
    if (!req.user) {
        return res.redirect("/vk");
    }

    if (req.user && config.admins.indexOf(req.user.vk_id) !== -1) {
        return next();
    }

    res.DATA.template = "default";
    res.DATA.page = "404";

    render(req, res, res.DATA);
});

// Общие данные для админки
app.use((req, res, next) => {
    res.DATA.template = "admin";
    res.DATA.menu = [
        {
            url: "/admin/price",
            val: "price",
            title: "Тарифы",
            ico: "dollar-sign",
        },
    ];

    next();
});

app.get("/", (req, res) => {
    res.redirect("/admin/price");
});

app.use("/price", routePrice);

module.exports = app;
