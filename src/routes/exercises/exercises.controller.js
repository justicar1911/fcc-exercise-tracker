const mongoose = require('mongoose')
const { findUser } = require('../../models/users.model')
const { scheduleNewExercise } = require('../../models/exercises.model');

function handleDate(req, res, next) {
    const { date } = req.body;
    req.date = new Date(date || Date.now()).toDateString();
    next()
}

async function httpAddNewExercise(req, res) {
    const { _id: userId } = req.params
    const { _id, username } = await findUser({ _id: userId })

    const { description, duration } = req.body

    const data = {
        username,
        description,
        duration: Number(duration),
        date: req.date,
        _id
    }
    return res.status(201).json(data)
}


module.exports = {
    handleDate,
    httpAddNewExercise
}