const router = require('express').Router();
const { addUser, login } = require('../models/userModel');

//verification
const { verifyToken } = require('../authentication/auth')



//Register User
router.post('/signup', addUser)

//Login
router.post('/login', login)


module.exports = router