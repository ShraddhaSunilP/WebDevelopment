// import mongoose
const mongoose = require('mongoose');

// create schemas
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

//create model
module.exports = mongoose.model('products', productSchema);