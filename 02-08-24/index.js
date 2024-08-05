const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('/profile',(_,resp)=>{
    const user={
        name:'Teju Patil',
        email:'teju@gmail.com',
        city:'mumbai',
        skills:['phtp','js','c++','java','node']
    }
    resp.render('profile',{user});
})

app.get('/login',(_,resp)=>{
    resp.render('login');
})

app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.listen(5000);