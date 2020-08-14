const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.status(500).send("This is homepage.");
});

module.exports = app;
