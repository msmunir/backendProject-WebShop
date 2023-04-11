const router = require('express').Router();
const { createNewProduct, getAllProducts, getProductById, updateProductById, deleteProductById } = require('../models/productModel');
// const { createNewProduct, getAllProducts, getProductById, getProductByUser, updateProductById, deleteProductById } = require('../models/productModel');

//verification
const { verifyToken } = require('../authentication/auth')



//POST - CREATE
router.post('/', createNewProduct)
// router.post('/', verifyToken, createNewProduct)

//GET - READ
router.get('/', getAllProducts)
// router.get('/user/:id', getProductByUser)
router.get('/:id', getProductById)


//PUT - UPDATE
router.put('/:id', updateProductById)


//DELETE - DELETE
router.delete('/:id', deleteProductById)




module.exports = router;