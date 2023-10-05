const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send("<h1>Hello</h1>")
});

app.get('/contact', function(req, res){
    res.send("Contact me at : sohamboravke2004@gmail.com")
});

app.get('/about', function(req, res){
    res.send("<h1>Hey there!</h1><h3>I'm Soham Boravke</h3>")
});

app.listen(3000, function (){
    console.log('Port started on port 3000'); 
});
