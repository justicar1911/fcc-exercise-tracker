const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    duration: Number,
    date: String,
    description: String,
})

const exerciseSchema = new mongoose.Schema({
    username: String,
    _id: mongoose.Schema.Types.ObjectId,
    log: [logSchema]
})

module.exports = mongoose.model("Exercise", exerciseSchema)