const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get('/bmicalculator', function (req, res){
    res.sendFile(__dirname + "/bmical.html");
})

app.listen(3000, function () {
    console.log("Welcome to localhost 3000!");
}) 

app.post("/bmicalculator",function (req, res){
    let w=parseFloat(req.body.weight);
    let h=parseFloat(req.body.height);
    bmi = w/(h*h);
    res.send("Your BMI is " + bmi);
});

app.post("/",function (req, res){
    
    let num1= Number(req.body.num1);
    let num2= Number(req.body.num2);
    let result = num1 + num2;
    
    res.send("The result of the calculation is " + result)
});