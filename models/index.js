//jshint esversion: 6
const mongoose = require("mongoose");
mongoose.set('debug', true);

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

module.exports.User = User;
