const mongoose = require('mongoose');
const uSchema = new mongoose.Schema({
    name: String,
    mob: String
})
module.exports = mongoose.model('user', uSchema)