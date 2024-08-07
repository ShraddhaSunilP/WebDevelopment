const express = require('express');
const EventEmitter = require("events");
const { countDocuments } = require('./product');
const app = express();

// create object for event
const event = new EventEmitter();
let count = 0;

event.on("countAPI",()=>{
    count++;
    console.log("event called", count);
})

app.get("/", (req, resp) =>{
    resp.send("api called")
    event.emit("countAPI");
});

app.get("/search", (req, resp) =>{
    resp.send("search api called")
});

app.get("/update", (req, resp) =>{
    resp.send("update api called")
});
app.listen(5000);