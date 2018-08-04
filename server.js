
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
    customerName: "",
    phoneNumber: "",
    customerEmail: "",
    customerID: ""
  }
];

var wait = [
  {
    routeName: "wait",
    customerName: "",
    phoneNumber: "",
    customerEmail: "",
    customerID: ""
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

//Create new table reservation
app.post("/api/tables", function(req, res) {
  var newTable = req.body;
  newTable.routeName= newTable.customerName;
  console.log(newTable);
  table.push(newTable);
  res.json(newTable);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

