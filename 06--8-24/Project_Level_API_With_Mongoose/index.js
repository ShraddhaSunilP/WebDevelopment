const express = require('express');
require('./config');
const Product = require('./product');

const app = express();

// data converting into json
app.use(express.json());

//api for add data
app.post("/create", async (req, resp) => {
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);
    resp.send(result);
})

// api for read data
app.get("/list", async (req, resp) => {
    let data = await Product.find();
    resp.send(data);
})

// api for delete data
app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})

//api update data
app.put("/update/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,   // {condition }
        {
            $set: req.body   //$set : updated data
        }
    );
    resp.send(data);
})

app.listen(5000);










