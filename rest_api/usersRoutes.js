const express = require('express');
const router = express.Router();
const {getAllUsers, getOneUser} = require('./usersControllers')


router
    .get('/users', getAllUsers)
    .get('/users/:id', getOneUser)
    .put('/users/:id')
    .delete('/users/:id')

module.exports = router;