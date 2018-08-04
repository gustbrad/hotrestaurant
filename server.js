<<<<<<< HEAD
<<<<<<< HEAD
=======
// Dependencies
// =============================================================
>>>>>>> d78367866c6981a1458e9fe4b88f59c02c9098fd
=======

// Dependencies
// =============================================================

>>>>>>> fbe7b760eb035e946015c465f6d8a4dcdfea800f
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var table= [];
var wait= [];

<<<<<<< HEAD
<<<<<<< HEAD
var app = express();
var PORT = 2121;

var reservations= [];

var waitList= [];

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
   });
=======
>>>>>>> fbe7b760eb035e946015c465f6d8a4dcdfea800f
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


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
<<<<<<< HEAD
>>>>>>> d78367866c6981a1458e9fe4b88f59c02c9098fd
=======

>>>>>>> fbe7b760eb035e946015c465f6d8a4dcdfea800f
