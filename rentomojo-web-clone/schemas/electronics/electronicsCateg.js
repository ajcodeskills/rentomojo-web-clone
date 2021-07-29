const mongoose = require('mongoose');
const elCSchema = new mongoose.Schema({
    categName: String,
    image: String,
})

module.exports = mongoose.model('electronicsCateg', elCSchema)