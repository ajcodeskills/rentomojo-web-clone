const mongoose = require('mongoose');
const fSchema = new mongoose.Schema({
    name: String,
    description: String,
    color: String,
    material: String,
    stock: String,
    dishcount: String,
    dimensions: String,
    ppmfor3months: String,
    ppmfor6months: String,
    ppmfor12months: String,
    deposit: String,
    refundable:Boolean,
    featureSpecs:Array,
    image:Array,
    categId: String,
    productType: String,
    bgImage:String,
})
module.exports = mongoose.model('furniture', fSchema)