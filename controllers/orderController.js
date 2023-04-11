const router = require('express').Router();

const { verifyToken } = require('../authentication/auth');
const { createNewOrder, getAllOrder } = require('../models/orderModel');



//POST - CREATE
router.post('/', verifyToken, createNewOrder)


//GET - READ
router.get('/', verifyToken, getAllOrder)



module.exports = router;