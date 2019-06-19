// =============================================================
// These routes send users to the various html pages
// =============================================================

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Index route loads index.html
  app.get("/", function(req, res) {
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

};
