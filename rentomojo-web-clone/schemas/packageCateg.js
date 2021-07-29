const mongoose = require('mongoose');
const pCSchema = new mongoose.Schema({
    packageName: String,
    image: String,
})

module.exports = mongoose.model('packageCateg', pCSchema)