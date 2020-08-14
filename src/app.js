const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.send("Deployed on eb successfully.");
});

module.exports = app;
