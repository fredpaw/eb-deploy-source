const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.send("This is homepage.");
});

module.exports = app;
