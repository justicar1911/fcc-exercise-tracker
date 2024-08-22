const { findUser } = require('../../models/users.model')
const {
    scheduleNewExercise,
    findAllExercises } = require('../../models/exercises.model');
const { getLogQuery } = require('../../services/query')

function handleDate(req, res, next) {
    const { date } = req.body;
    req.date = new Date(date || Date.now()).toDateString();
    next()
}

async function httpAddNewExercise(req, res) {
    const { _id: userId } = req.params
    const { _id, username } = await findUser({ _id: userId })
    const { description, duration } = req.body

    const exercise = {
        username,
        description,
        duration: Number(duration),
        date: req.date,
        _id
    }
    await scheduleNewExercise(exercise)
    return res.status(201).json(exercise)
}

async function httpGetAllExercise(req, res) {
    const query = getLogQuery(req.query)
    const { _id: userId } = req.params
    const exercises = await findAllExercises(userId, query)
    return res.status(200).json(exercises)
}

module.exports = {
    handleDate,
    httpAddNewExercise,
    httpGetAllExercise
}