const express = require("express"),
    render = require("../../render").render;

var app = express.Router();

app.use((req, res, next) => {
    res.DATA.template = "main";

    next();
});

// Главная
app.get("/", (req, res) => {
    res.DATA.page = "index";
    res.DATA.title = "Трансферное такси по Крыму «А-ТАКСИ»";

    render(req, res, res.DATA);
});

// О нас
app.get("/about", (req, res) => {
    res.DATA.page = "about";
    res.DATA.title = "О нас | «А-ТАКСИ»";

    render(req, res, res.DATA);
});

// Цены
app.get("/price", (req, res) => {
    res.DATA.page = "price";
    res.DATA.title = "Цены | «А-ТАКСИ»";

    render(req, res, res.DATA);
});

module.exports = app;
