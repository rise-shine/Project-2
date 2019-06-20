// =============================================================
// These routes send users to the various html pages
// =============================================================

// Dependencies
// =============================================================
var path = require("path");
var app = require('express').Router();
// Routes
// =============================================================
  // Index route loads index.html
  app.get("/", function(req, res) {
    console.log(path.join(__dirname, "../public/index.html"))
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Recipient route loads recipient.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recipient.html"));
  });

  // Holiday route loads holiday.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/holiday.html"));
  });
module.exports = app




