var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Users = new Schema({
    // id пользователя ВК
    vk_id: {
        type: Number
    },

    // E-mail от ВК
    vk_email: {
        type: String
    },

    // Имя
    first_name: {
        type: String
    },

    // Фамилия
    last_name: {
        type: String
    },

    // Фотография
    photo_200: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Users', Users);
