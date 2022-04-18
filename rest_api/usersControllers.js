const {users} = require('./data')

const getAllUsers = async (req, res) => {
    res.json(users)
}

const getOneUser = async (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id === +id)
    if (!user) {
        res.status(400).json({message: `No user with the id of ${id}`})
    }
    res.json(user)
}

const updateUser = async (req, res) => {

}

const deleteUser = async (req, res) => {

}

module.exports = {
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}
