const mongoose = require('mongoose');
const fCSchema = new mongoose.Schema({
    categName: String,
    image: String,
})

module.exports = mongoose.model('furnitureCateg', fCSchema)