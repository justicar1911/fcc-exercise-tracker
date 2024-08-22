const { getUser } = require('../../models/users.model')
const { scheduleNewExercise } = require('../../models/exercises.model');

async function handleUserID(req, res, next) {
    const { _id } = req.params;
    req.userID = await getUser(_id)
    if (!req.userID) {
        return res.status(404).json({ error: "User Not Found" })
    }
    next()
}

function handleDate(req, res, next) {
    const { date } = req.body;
    req.date = new Date(date || Date.now()).toDateString();
    next()
}

async function httpAddNewExercise(req, res) {
    const { "_id": id, description, duration, date } = req.body
    return res.status(200).json(req.date)
}


module.exports = {
    handleUserID,
    handleDate,
    httpAddNewExercise
}