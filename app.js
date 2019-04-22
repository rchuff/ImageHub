//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/userimageDB", {useNewUrlParser: true});

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});


app.listen(3000, () => console.log("Server now running on port 3000"));
