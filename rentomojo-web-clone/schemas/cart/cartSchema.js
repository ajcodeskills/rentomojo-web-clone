const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    user: String,
    name: String,
    stock: String,
    dishcount: String,
    ppmfor3months: String,
    ppmfor6months: String,
    ppmfor12months: String,
    deposit: String,
    refundable:Boolean,
    image:String,
    quantity: Number,
    months:String
})
module.exports = mongoose.model('carts', cartSchema)