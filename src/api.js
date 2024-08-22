const express = require('express');
const usersRouter = require('./routes/users/users.router')

const api = express.Router();

api.use('/users', usersRouter)

module.exports = api;
