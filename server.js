// Require Dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");


var app = express();
var PORT = process.env.PORT || 3000;
console.log('hello');



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.send("hello");
})


app.listen(PORT, () => {
    console.log('app running on port: ' + PORT);
});