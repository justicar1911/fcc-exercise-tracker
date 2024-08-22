const mongoose = require('mongoose')
const usersDatabase = require('./users.mongo')

async function addNewUser(user) {
    const result = await usersDatabase.create({ username: user.username })
    return await usersDatabase.findById(result._id).select('-__v')
}

async function findUser(filter) {
    return await usersDatabase.findOne(filter)
}

async function getAllUser() {
    return await usersDatabase.find({}, { '__v': 0 })
}

module.exports = {
    addNewUser,
    findUser,
    getAllUser
}