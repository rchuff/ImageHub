//jshint esversion: 6
const mongoose = require("mongoose");
require('dotenv').config();

mongoose.set('debug', true);

mongoose.connect(`mongodb+srv://admin-ryan:${process.env.MONGODB_PASS}@cluster0-kzf2g.mongodb.net/userimageDB?retryWrites=true&w=majority`, {
  useNewUrlParser: true
})
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String
});

const User = mongoose.model("User", userSchema);

module.exports.User = User;
