const mongoose = require("mongoose");

// Schema
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
