const express = require("express"),
    config = require("../../config"),
    Helpers = require("../../helpers");

var app = express.Router();

// Отправить уведомление в телеграм
function sendTelegramNotification(order) {
    var type = +order.type || 1,
        typeText = type === 1 ? "В течении 20 минут" : "Предварительный",
        back = +order.back || false,
        price = +order.price.replace(new RegExp(/\D/g), ""),
        classes = ["", "Стандарт", "Комфорт", "Бизнес", "Минивэн"];

    var message = `<b>Новый заказ!</b>
Откуда: ${order.from}
Куда: ${order.to}
Тип заказа: ${typeText}\n`;
    if (type !== 1 && order.time) {
        message += `Дата поездки: ${order.time["date"]} в ${order.time["time"]}\n`;
    }
    if (back) {
        message += `Обратный трансфер: Да
Дата обратной поздки: ${order.backdate["date"]} в ${order.backdate["time"]}\n`;
    }
    message += `Класс машины: ${classes[order.class]}
Комментарий к заказу: ${order.commentary}
Стоимость: ${price}\n`;
    if (back) {
        message += `Скидка: 5%\nСтоимость с учетом скидки: ${price * 0.95}\n`;
    }
    message += `Телефон: +7${order.phone}\n`;

    Helpers.sendMessageTelegram(message);
}

function sendEmailNotification(order) {
    var subject = "Новый заказ!",
        type = +order.type || 1,
        typeText = type === 1 ? "В течении 20 минут" : "Предварительный",
        back = +order.back || false,
        price = +order.price.replace(new RegExp(/\D/g), ""),
        classes = ["", "Стандарт", "Комфорт", "Бизнес", "Минивэн"];

    var message = `
        <h2>Новый заказ!</h2>
        <b>Откуда: </b>${order.from}<br>
        <b>Куда: </b>${order.to}<br>
        <b>Тип заказа: </b>${typeText}<br>
    `;
    if (type !== 1 && order.time) {
        message += `<b>Дата поездки: </b>${order.time["date"]} в ${order.time["time"]}<br>`;
    }
    if (back) {
        message += `
            <b>Обратный трансфер: </b>Да<br>
            <b>Дата обратной поздки: </b>${order.backdate["date"]} в ${order.backdate["time"]}<br>
        `;
    }
    message += `
        <b>Класс машины: </b>${classes[order.class]}<br>
        <b>Комментарий к заказу: </b>${order.commentary}<br>
        <b>Стоимость: </b>${price}<br>
    `;
    if (back) {
        message += `
            <b>Скидка: </b>5%<br>
            <b>Стоимость с учетом скидки: </b>${price * 0.95}<br>
        `;
    }
    message += `<b>Телефон: </b>${order.phone}<br>`;

    Helpers.sendMail(config.email.to, subject, message);
    Helpers.sendMail(config.email.copy, subject, message);
}

// Отправить данные заказа на почту
app.post("/save", async (req, res) => {
    var order = req.body.data;

    sendEmailNotification(order);
    sendTelegramNotification(order);

    res.json({ status: true });
});

module.exports = app;
