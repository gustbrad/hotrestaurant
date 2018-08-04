
// Dependencies
// =============================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

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
    routeName: "tables",
    name: "",
    phoneNumber: "",
    email: "",
    uniqueID: ""
  }
];

var wait = [
  {
    routeName: "wait",
    name: "",
    phoneNumber: "",
    email: "",
    uniqueID: ""
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all tables
app.get("/api/tables", function(req, res) {
  return res.json(table);
});

// Displays all tables
app.get("/api/waitlist", function(req, res) {
  return res.json(wait);
});



// Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  console.log(table.length)
  if (table.length < 6) {
    table.push(newReservation);
  } else {
    wait.push(newReservation)
  }


  res.json(newReservation);
});






// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

