const {
    addNewUser,
    getAllUser } = require('../../models/users.model')

async function httpAddNewUser(req, res) {
    const user = req.body
    const record = await addNewUser(user)

    return res.status(201).json(record)
}

async function httpGetAllUsers(req, res) {
    const users = await getAllUser();
    return res.status(200).json(users)
}

module.exports = {
    httpAddNewUser,
    httpGetAllUsers,
}