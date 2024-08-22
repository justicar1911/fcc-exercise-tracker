const express = require('express');
const {
    httpAddNewUser,
    httpGetAllUsers
} = require('./users.controller')
const usersRouter = express.Router();

usersRouter.post('/', httpAddNewUser)
usersRouter.get('/', httpGetAllUsers)


module.exports = usersRouter;