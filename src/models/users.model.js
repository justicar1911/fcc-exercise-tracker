const usersDatabase = require('./users.mongo')

async function addNewUser(user) {
    const result = await usersDatabase.create({ username: user.username })
    return await usersDatabase.findById(result._id).select('-__v')
}

async function getUser(id) {
    try {
        return await usersDatabase.findById({ _id: id })
    } catch {
        return null
    }


}

async function getAllUser() {
    return await usersDatabase.find({}, { '__v': 0 })
}

module.exports = {
    addNewUser,
    getUser,
    getAllUser
}