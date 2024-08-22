const exerciseDatabase = require('./exercises.mongo')

async function scheduleNewExercise(exercise) {
    await exerciseDatabase.create(exercise)
}


module.exports = {
    scheduleNewExercise
}