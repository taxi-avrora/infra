const express = require("express"),
    render = require("../../render").render,
    // Модели Mongoose
    Cities = require("../../models/cities"),
    Prices = require("../../models/prices");

var app = express.Router();

app.get("/", async (req, res) => {
    res.DATA.page = "price";
    res.DATA.cities = await Cities.find();

    render(req, res, res.DATA);
});

// Сохранить цены
app.post("/save", async (req, res) => {
    var data = req.body;

    // Проверяем обязательные параметры
    if (!data.from) {
        res.json({
            status: "error",
            message: "Не указана начальная точка маршрута",
            fields: ["from"],
        });
    }
    if (!data.to) {
        res.json({
            status: "error",
            message: "Не указана конечная точка маршрута",
            fields: ["to"],
        });
    }
    if (!data.price_standart) {
        res.json({
            status: "error",
            message: "Не указана цена для типа авто - стандарт",
            fields: ["price_standart"],
        });
    }
    if (!data.price_comfort) {
        res.json({
            status: "error",
            message: "Не указана цена для типа авто - комфорт",
            fields: ["price_comfort"],
        });
    }
    if (!data.price_business) {
        res.json({
            status: "error",
            message: "Не указана цена для типа авто - бизнес",
            fields: ["price_business"],
        });
    }
    if (!data.price_minivan) {
        res.json({
            status: "error",
            message: "Не указана цена для типа авто - минивэн",
            fields: ["price_minivan"],
        });
    }

    // Находим города
    var fromCity = await Cities.findOne({ name: data.from }),
        toCity = await Cities.findOne({ name: data.to });

    if (!fromCity || !toCity || fromCity === toCity) {
        res.json({
            status: "error",
            message: "Неверно указан маршрут",
            fields: ["from", "to"],
        });
    }

    var prices = await Prices.findOne({ from: fromCity._id, to: toCity._id });

    if (prices) {
        // Обновляем цены
        await Prices.update(
            {
                from: fromCity._id,
                to: toCity._id,
            },
            {
                price_standart: data.price_standart,
                price_comfort: data.price_comfort,
                price_business: data.price_business,
                price_minivan: data.price_minivan,
            }
        );
    } else {
        await new Prices({
            from: fromCity._id,
            to: toCity._id,
            price_standart: data.price_standart,
            price_comfort: data.price_comfort,
            price_business: data.price_business,
            price_minivan: data.price_minivan,
        }).save();
    }

    return res.json({
        status: "success",
        message: `Цены на маршрут ${data.from} - ${data.to} успешно изменены.`,
    });
});

module.exports = app;
