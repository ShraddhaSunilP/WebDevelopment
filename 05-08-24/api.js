const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb')
const app = express();
app.use(express.json());

// API for Read Data
app.get('/',async(req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
});

// API for Create Data
app.post('/', async(req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    resp.send(result);
});

//API for Update Data
app.put('/:name',async(req, resp) =>{  // for change name
    // app.put('/',async(req, resp) =>{
    let data = await dbConnect();
    let result = data.updateOne(
        // {name: req.body.name},
        {name: req.params.name}, //for change name
        {$set:req.body}
    )
    resp.send({result:"update"});
});

// API for Delete Data
app.delete('/:id', async(req, resp) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)}) 
    resp.send(result);
})
app.listen(5000);
