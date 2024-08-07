const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

// Add Data in mongodb
const saveInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = new Product({
        name: 'node pro',
        price: 2500,
        brand: 'xyz',
        category: 'mobile'
    });
    let result = await data.save();
    console.log(result);
}

// update data in mongodb
const updateInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
        { name: "screen" },
        {
            $set: { price: 750, name:"max-8" }
        }
    )
    console.log(data);
}

//Delete data from mongodb
const deleteInDB = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne({name:'U10'});
    console.log(data);
}

//find data from mongodb
const findInDB = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find();
    console.log(data);
}

findInDB();
