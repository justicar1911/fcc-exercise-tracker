const express = require('express');
const {
    httpAddNewUser,
    httpGetAllUsers,
} = require('./users.controller')

const {
    handleUserID,
    handleDate,
    httpAddNewExercise,

} = require('../exercises/exercises.controller')

const usersRouter = express.Router();

usersRouter.post('/', httpAddNewUser)
usersRouter.get('/', httpGetAllUsers)

usersRouter.post('/:_id/exercises', [handleUserID, handleDate], httpAddNewExercise)

module.exports = usersRouter;