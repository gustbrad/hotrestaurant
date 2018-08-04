var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 2121;

var reservations= [];

var waitList= [];

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
   });