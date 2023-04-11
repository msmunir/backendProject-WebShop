const mongoose = require('mongoose')
const { Schema } = mongoose;
const User = require('../schemas/userSchema');




const orderRowSchema = mongoose.Schema({ product: mongoose.Types.ObjectId, quantity: Number})
const orderSchema = new Schema({
    user:           { type: mongoose.Types.ObjectId, ref: 'User' },
    orderRows:      { type:  [orderRowSchema] }
})
    
// const orderSchema = new Schema({
//     user: {
//         type: mongoose.Types.ObjectId,
//         ref: 'User'
//     },
//     orderRows: {
//         product: {
//             type: mongoose.Types.ObjectId,
//             ref: 'Product'
//         },
//         quantity: {
//             type: Number
//         }
//     }
// })


module.exports = mongoose.model('Order',  orderSchema)