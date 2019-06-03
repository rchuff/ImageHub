//jshint esversion: 6

//logic for the routing parameters
const db = require("../models"),
bcrypt = require("bcrypt"),
saltRounds = 10,
info = require("../modules/info.js"),
_= require('lodash'),
bodyParser = require("body-parser");



exports.login = (req, res) => {
  const loginValue = req.body.submit;

  //Checks to see if path is login or register
  if (loginValue === "Login") {
    res.render("login");
  } else if (loginValue === "Register") {
    res.redirect("register");
  }
  //validates login credentials from login page
  else {
    const username = req.body.username;
    const password = req.body.password;
    db.User.find({username: username}, function(err, userFound) {
      if (userFound.length !=0) {
        const hash = userFound[0].password;
        if (bcrypt.compareSync(password, hash)) {
          res.render("user", {
            firstName: userFound[0].firstName,
            lastName: userFound[0].lastName,
            images: info.image(),
            quotes: info.quote()
          });
        } else {
          res.render("login");
        }
      } else {
        res.render("login");
      }
    });
  }
};

//encrypts password and registers user
exports.register = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const username = req.body.username;
    const hash = bcrypt.hashSync(password, saltRounds);
    const newUser = new db.User({
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: hash
    });

    newUser.save(function(err, newUser){
      if (err){
        console.log(err);
      } else {
        res.render("user", {
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          images: info.image(),
          quotes: info.quote()});
      }
    });

};
