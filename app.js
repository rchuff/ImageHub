//jshint esversion:6
const express = require("express");
const ejs = require("ejs");
const db = require("./models/index.js");
const routes = require("./routes/routing.js");
const bodyParser = require("body-parser");


const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', routes);




app.listen(3000, () => console.log("Server now running on port 3000"));
