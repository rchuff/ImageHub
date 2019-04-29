//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/userimageDB", {useNewUrlParser: true});

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/login", function(req,res){
  res.send("You are now at the login page.");
});

app.post("/login", function(req, res){
  res.send("You are now at the login page.");
});


app.listen(3000, () => console.log("Server now running on port 3000"));
