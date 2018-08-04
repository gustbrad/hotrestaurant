<<<<<<< HEAD
=======
// Dependencies
// =============================================================
>>>>>>> d78367866c6981a1458e9fe4b88f59c02c9098fd
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

<<<<<<< HEAD
var app = express();
var PORT = 2121;

var reservations= [];

var waitList= [];

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
   });
=======
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 2121;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Table Reservation (DATA)
// =============================================================
var table = [
  {
    customerName: "Bob1",
    phoneNumber: "111-111-1111",
    customerEmail: "bob@fakeemail.com",
    customerID: "1"
  }
];

var wait = [
  {
    customerName: "",
    phoneNumber: "",
    customerEmail: "",
    customerID: ""
  }
];

app.get("/", function(req, res) {
  res.send("Welcome to the hot restaurant page");
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
>>>>>>> d78367866c6981a1458e9fe4b88f59c02c9098fd
