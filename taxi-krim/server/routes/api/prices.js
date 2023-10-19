const
    express = require('express'),
    request = require('request'),

    // Модели Mongoose
    Cities = require('../../models/cities'),
    Prices = require('../../models/prices');

var app = express.Router();

app.get('/get', async(req, res) => {
    var data = req.query;

    if (!data.from || !data.to) {
        return res.json({
            error: {
                message: 'Не указан маршрут'
            }
        });
    }

    var from = await Cities.findOne({ name: data.from }),
        to = await Cities.findOne({ name: data.to });

    if (!from || !to || from === to) {
        return res.json({
            error: {
                message: 'Указан неверный маршрут'
            }
        });
    }

    // Проверяем наличие стоимости поездки в БД
    try {
        var prices = await Prices.findOne({ from: from._id, to: to._id }),
            results = {
                standart: prices.price_standart,
                comfort: prices.price_comfort,
                business: prices.price_business,
                minivan: prices.price_minivan
            };

        res.json({
            response: {
                prices: results
            }
        });
    } catch(err) {
        console.log('Ошибка в получение стоимости поездки', err);
        res.json({
            response: {
                prices: {
                    standart: 0,
                    comfort: 0,
                    business: 0,
                    minivan: 0
                }
            }
        });
    }
});

module.exports = app;
