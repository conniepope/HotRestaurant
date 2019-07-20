// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routing
// =============================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


// Variables
// =============================================================

var reserve = [];


// Take in JSON
// =============================================================

app.post("/api/reserve", function(req, res) {

  var newReserve = req.body;

  newReserve.routeName = newReserve.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReserve);
  console.log(req);

  reserve.push(newReserve);

  res.json(newReserve);
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });