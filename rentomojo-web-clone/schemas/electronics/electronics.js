const mongoose = require('mongoose');
const elSchema = new mongoose.Schema({
    name: String,
    description: String,
    color: String,
    safetyUsage:Array,
    stock: String,
    productType: String,
    bgImage:String,
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
})
module.exports = mongoose.model('electronics', elSchema)