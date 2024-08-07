const express = require('express');
const con = require("./config");
const app = express();
app.use(express.json());

app.get("/", (req, resp) => {
    con.query("select * from user", (err, result) => {
        if (err) {
            resp.send("error");
        }
        else {
            resp.send(result);
        }
    });
});

app.post("/",(req,resp)=>{
    const data = req.body;
    con.query("Insert INTO user SET ? ", data, (error, result, fields) =>{
        if(error) error;
        resp.send(result)
    }); 
});

app.put("/:id",(req,resp)=>{
    const data = [req.body.user_name,req.body.contact_no,req.body.email, req.params.id]
    con.query("UPDATE user SET user_name = ?, contact_no = ?, email = ? where user_id = ? ", data, (error, result, fields)=>{
       if(error) throw error;
       resp.send(result) 
    });
});

app.delete("/:id", (req, resp)=>{
    con.query("DELETE FROM user WHERE user_id = " +req.params.id, (error, result)=>{
        if(error) throw error
        resp.send(result);
    });
});
app.listen(5000);



