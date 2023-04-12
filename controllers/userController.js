const router = require('express').Router();
const { addUser, login } = require('../models/userModel');


//Register User
router.post('/signup', addUser)

//Login
router.post('/login', login)


module.exports = router