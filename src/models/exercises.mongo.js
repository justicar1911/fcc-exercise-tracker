const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    description: String,
    duration: Number,
    date: Date,
})

module.exports = mongoose.model("Exercise", exerciseSchema)