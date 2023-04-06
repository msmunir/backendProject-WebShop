const router = require('express').Router();
const { createNewProduct, getAllProducts, getProductById, updateProductById, deleteProductById } = require('../models/productModel');





//POST - CREATE
router.post('/', createNewProduct)

//GET - READ
router.get('/', getAllProducts)
router.get('/:id', getProductById)


//PUT - UPDATE
router.put('/:id', updateProductById)


//DELETE - DELETE
router.delete('/:id', deleteProductById)




module.exports = router;