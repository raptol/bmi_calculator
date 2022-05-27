/**
 * This app performs BMI calculation \
 * and then display the values on the templatate html based on ejs
 * Name: Sung-won Kim
 * ID: 300320693
 */

//define nodejs express
const express = require('express');
//define body parser
const bodyParser = require('body-parser');
//define bmicalculation library
const bmicalc = require(__dirname + '/bmicalc.js');

const app = express();

// define variables to display values entered from user 
// and result value calculated
let age = "";
let weight = "";
let height = "";
let bmiResult = "";

// set ejs template
app.set('view engine', 'ejs');
// encode url from body parser
app.use(bodyParser.urlencoded({extended: true}));
// use css sytle of the public directory
app.use(express.static("public"));

// display root page with values
app.get("/", function(req, res) {
    res.render("form", {
        age: age,
        weight: weight,
        height: height,
        bmiResult: bmiResult
    });
});

// perform calc post action
app.post("/calc", function(req, res) {

    //Get values entered from user
    age = req.body.age;
    weight = req.body.weight;
    height = req.body.height;

    console.log("age: " + age);
    console.log("weight: " + weight);
    console.log("height:" + height);

    //calculate bmi
    const result = Number(bmicalc.getBMI(Number(req.body.weight), Number(req.body.height)));
    console.log(result);

    //assign result
    if(result > 0) { // return value exists
        bmiResult = "Your BMI Result is: " + result;
    } else {
        bmiResult = "Please enter a valid values: " + result;
    }

    res.redirect("/"); //redirect root page
});

// listenning service on the 3000 port
app.listen(3000, function() {
    console.log("Server running on port 3000.");
});
