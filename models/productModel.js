const Product = require('../schemas/productSchema');



// Creating Product
exports.createNewProduct = async (req, res) => {

    const { name, description, imgURL, price, quantity } = req.body;

    if(!name || !description || !imgURL || !price || !quantity ) {
        return res.status(400).json({ message: "All the fields require to create product."})
    }
    try {
        const product = await Product.create({ name, description, imgURL, price, quantity })
        console.log(product)
        res.status(201).json(product)
    } catch {
        res.status(500).json({ message: "Oh snap! something went wrong!"})
    }

}


// Get all the products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: "Oh snap! something went wrong!"})
    }
}



// Get one specific product
exports.getProductById = async (req, res) => {
    try {     
        const productById = await Product.findById(req.params.id)
        res.status(200).json(productById)
    } catch (error) {
        res.status(500).json({ message: "Oh snap! something went wrong!"})
    }
}



// Update a product
exports.updateProductById = async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(500).json({ message: "Oh snap! something went wrong!"})
    }
}



// Delete a product from DB
exports.deleteProductById = async (req, res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteProduct)
    } catch (error) {
        res.status(404).json({ message: "Oh snap! Product does not exits!"})
    }
}