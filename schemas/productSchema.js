const mongoose = require('mongoose');
const { Schema } = mongoose;



const productSchema = new Schema({
    name:           { type: String, required: true },
    description:    { type: String, required: true },
    imgURL:         { type: String, required: true },
    price:          { type: String, required: true },
    quantity:       { type: Number, default: 0, required: true }
    // user:           { type: Schema.Types.ObjectId, ref: 'User', required: true}
}) 


module.exports = mongoose.model('Product', productSchema)