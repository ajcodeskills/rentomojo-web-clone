const mongoose = require('mongoose');
const apCSchema = new mongoose.Schema({
    categName: String,
    image: String,
})

module.exports = mongoose.model('applianceCateg', apCSchema)