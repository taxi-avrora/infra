var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Prices = new Schema({
    // Откуда
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cities'
    },

    // Куда
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cities'
    },

    // Стоимости разных типов авто
    price_standart: {
        type: Number
    },
    price_comfort: {
        type: Number
    },
    price_business: {
        type: Number
    },
    price_minivan: {
        type: Number
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Prices', Prices);
