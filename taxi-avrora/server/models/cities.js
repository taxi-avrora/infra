var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Cities = new Schema({
    // Название города
    name: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Cities', Cities);
