//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const bcrypt = require("bcrypt");
const saltRounds = 10;



const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/userimageDB", {
  useNewUrlParser: true
});

const itemSchema = new mongoose.Schema({
  img: {data: Buffer, contentType: String}
});

const Item = new mongoose.model("Clothes", itemSchema);



const userSchema = new mongoose.Schema({
  username: String,
  password: String
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
  const loginValue = req.body.submit;
  if (loginValue === "Login") {
    res.render("login");
  } else if (loginValue === "Register") {
    res.redirect("register");
  } else {
    const username = req.body.username;
    const password = req.body.password;
    User.find({username: username}, function(err, userFound) {
      if (userFound) {
        const hash = userFound[0].password;
        if (bcrypt.compareSync(password, hash)) {
          console.log(userFound[0]);
          res.render("user", {username: userFound[0].username});
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
  const password = req.body.password;
  const username = req.body.username;
  console.log(password);
  const hash = bcrypt.hashSync(password, saltRounds);
  const newUser = new User({
    username: username,
    password: hash
  });

  newUser.save(function(err, newUser){
    if (err){
      console.log(err);
    } else {
      res.render("users", {username: newUser.username});
      console.log(newUser);
    }
  });
});


app.listen(3000, () => console.log("Server now running on port 3000"));
