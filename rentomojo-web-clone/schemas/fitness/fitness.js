const mongoose = require('mongoose');
const fitSchema = new mongoose.Schema({
    name: String,
    description: String,
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
module.exports = mongoose.model('fitness', fitSchema)