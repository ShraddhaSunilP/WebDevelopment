const express =  require('express');
const reqFilter = require('./middleware');

module.exports = reqFilter = (req, resp, next)=>{
    if(!req.query.age){
        resp.send("Please provide your age");
    } 
    else if(req.query.ages<18){
        resp.send("you are under aged");
    }
    else{
        next();
    }
}

const app = express();

// app.use(reqFilter);

app.get('/',(res,resp) => {
    resp.send('Welcome to Home page');
});

app.get('/users', reqFilter, (res,resp)=>{
    resp.send('Welcome to Users page');
});

app.get('/about', reqFilter, (res,resp)=>{
    resp.send('Welcome to About page');
});

app.listen(5000);



