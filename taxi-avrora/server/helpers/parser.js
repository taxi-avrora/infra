const Promise = require("bluebird"),
    mongoose = require("mongoose"),
    request = require("request"),
    config = require("../config"),
    Cities = require("../models/cities"),
    Prices = require("../models/prices");

// Подключение к MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb, {
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 3000,
});

let Parser = {
    async start() {
        let cities = await Cities.find(),
            tasks = [],
            count = 0,
            perzent = 0;

        cities.map((from) => {
            cities.map((to) => {
                if (from._id !== to._id) {
                    tasks.push(async function () {
                        let prices = await Parser.getAllPrices(from, to);

                        count++;
                        perzent = tasks.length
                            ? (count * 100) / tasks.length
                            : 0;

                        console.log(
                            `Выполнено ${count} из ${tasks.length} (${perzent}%)`
                        );
                        console.log("Цены:", prices);
                    });
                }
            });
        });

        Promise.map(
            tasks,
            (task) => {
                return task();
            },
            { concurrency: 3 }
        ).then((data) => {
            console.log("Закончено!");
        });
    },

    // Получить стоимость поездки с taxi-sipaero для всех классов
    getAllPrices(from, to) {
        var classes = [1, 2, 3, 4],
            classesNames = ["", "standart", "comfort", "business", "minivan"],
            res = {};

        return new Promise((resolve) => {
            Promise.map(
                classes,
                (_cl) => {
                    return Parser.getPrice(from.name, to.name, _cl);
                },
                { concurrency: 1 }
            ).then((data) => {
                data.forEach((_item) => {
                    var className = classesNames[_item.class];

                    res[className] = _item.price;
                });

                return new Prices({
                    from: from._id,
                    to: to._id,
                    price_standart: res.standart,
                    price_comfort: res.comfort,
                    price_business: res.business,
                    price_minivan: res.minivan,
                })
                    .save()
                    .then(() => {
                        resolve(res);
                    });
            });
        });
    },

    // Получить стоимость поездки с taxi-sipaero для одного класса
    getPrice(from, to, cl) {
        from = encodeURIComponent(from);
        to = encodeURIComponent(to);

        return new Promise((resolve, reject) => {
            var url = `http://krim-tx.ru/upload_price.php?city=${from}?${to}?${cl}`;

            Parser.sleep(0).then(() => {
                request(url, function (err, res, body) {
                    if (err) {
                        reject(err);
                    }

                    var price = +body.replace(new RegExp(/\D/g), "");
                    resolve({
                        class: cl,
                        price: price,
                    });
                });
            });
        });
    },

    //
    sleep(time) {
        return new Promise((resolve) => {
            setTimeout(resolve, time);
        });
    },
};

Parser.start();
