const Order = require('../schemas/orderSchema');
const Product = require('../schemas/productSchema');
const User = require('../schemas/userSchema');


exports.createNewOrder = async (req, res) => {
    

    const { orderRows } = req.body
    if (!orderRows){
        return res.status(400).json({ message: "All the fields require to create product."})
    }
    try {
        const order = await Order.create({ user: req.userId, orderRows })
        res.status(201).json(order)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Oh snap! something went wrong!"})
    }
    
    // const newOrder = new Order({
    //     ...req.body,
    //     user: req.userId
        
    // });
    // try {
    //     await newOrder.save();
    //     res.status(201).json({newOrder})
    // } catch (error) {
    //     console.log(error)
    //     res.status(500).json({ message: "Oh snap! something went wrong!"})
    // }
}

exports.getAllOrder = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.userId });
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({ message: "Oh snap! something went wrong!"})
    }
}

// Get products by specific User
// exports.getProductByUser = async (req, res) => {
//     const productByUser = await Product.find({ user: req.userId })
//     res.status(200).json(getProductByUser)
// }


