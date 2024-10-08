const exerciseDatabase = require('./exercises.mongo')
const { DEFAULT_FROM_NUMBER, DEFAULT_TO_NUMBER, DEFAULT_PAGE_LIMIT } = require('../services/query')

async function scheduleNewExercise({ _id, username, description, duration, date }) {
    const dateObj = new Date(date).toDateString()
    await exerciseDatabase.findByIdAndUpdate(
        _id,
        {
            username,
            $push: { log: { description, duration, date: dateObj } }
        },
        { upsert: true })
}

async function findAllExercises(id, { from, to, limit }) {
    const exercises = await exerciseDatabase.findById(id).select('-__v').lean()

    if (from == DEFAULT_FROM_NUMBER && to == DEFAULT_TO_NUMBER && limit == DEFAULT_PAGE_LIMIT) {
        return {
            ...exercises,
            count: exercises.log.length
        }
    }

    const dateFilteredLog = exercises.log.filter(exercise => {
        let exerciseDate = new Date(exercise.date).valueOf()
        return exerciseDate >= from && exerciseDate <= to
    })

    if (!limit) {
        limit = dateFilteredLog.length
    }

    const limitFilteredLog = dateFilteredLog.slice(0, limit);

    return {
        ...exercises,
        log: limitFilteredLog,
        count: limitFilteredLog.length
    }
}

module.exports = {
    scheduleNewExercise,
    findAllExercises
}