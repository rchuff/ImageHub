//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const _= require('lodash');
const info = require("./modules/info.js");



const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/userimageDB", {
  useNewUrlParser: true
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String
});

const User = mongoose.model("User", userSchema);

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/login", function(req, res) {
  res.render("login");
});

app.get("/register", function(req, res) {
  res.render("register");
});


app.post("/login", function(req, res) {
  //checks if login or register pushed
  const loginValue = req.body.submit;
  if (loginValue === "Login") {
    res.render("login");
  } else if (loginValue === "Register") {
    res.redirect("register");
  }
  //validates login credentials from login page
  else {
    const username = req.body.username;
    const password = req.body.password;
    User.find({username: username}, function(err, userFound) {
      if (userFound) {
        const hash = userFound[0].password;
        if (bcrypt.compareSync(password, hash)) {
          console.log(info.image());
          console.log(info.quote());
          res.render("user", {
            firstName: userFound[0].firstName,
            lastName: userFound[0].lastName,
            images: info.image(),
            quotes: info.quote()
          });
        } else {
          res.redirect("/login");
        }
      } else {
        res.redirect("/login");
      }
    });
  }
});

app.post("/register", function(req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;
  const username = req.body.username;
  console.log(req.body);
  const hash = bcrypt.hashSync(password, saltRounds);
  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    username: username,
    password: hash
  });

  newUser.save(function(err, newUser){
    if (err){
      console.log(err);
    } else {
      res.render("user", {firstName: newUser.firstName, lastName: newUser.lastName});
      console.log(newUser);
    }
  });
});


app.listen(3000, () => console.log("Server now running on port 3000"));
