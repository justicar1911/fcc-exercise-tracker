const express = require('express');
const {
    httpAddNewUser,
    httpGetAllUsers,
} = require('./users.controller')

const {
    handleDate,
    httpAddNewExercise,

} = require('../exercises/exercises.controller')

const usersRouter = express.Router();

usersRouter.post('/', httpAddNewUser)
usersRouter.get('/', httpGetAllUsers)

usersRouter.post('/:_id/exercises', handleDate, httpAddNewExercise)

module.exports = usersRouter;