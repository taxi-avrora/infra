const
    express = require('express'),

    // Роутеры
    routePrices = require('./prices'),
    routeOrders = require('./orders');

var app = express.Router();

// Роутинг
app
    .use('/prices', routePrices)
    .use('/orders', routeOrders);

module.exports = app;
