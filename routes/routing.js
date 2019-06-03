//jshint esversion: 6
//routing for the application

const express = require('express'),
      router = express.Router(),
      db = require("../models"),
      bcrypt = require("bcrypt"),
      saltRounds = 10,
      info = require("../modules/info.js"),
      _= require('lodash'),
      bodyParser = require("body-parser"),
      logic = require("./logic.js");

router.route("/")
.get(function(req,res){
  res.render("index");
});

router.route("/login")
.get(function(req, res) {
  res.render("login");
})
.post(logic.login);

router.route("/register")
.get(function(req, res) {
  res.render("register");
})
.post(logic.register);

module.exports = router;
