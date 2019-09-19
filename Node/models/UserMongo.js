var mongoose = require('../modules/mongoose.js');
var userSchem = mongoose.Schema({

  model: {
    type: String,
  },
  cost: {
    type: Number
  },
  age: {
    type: String
  },

  array: {

  },
  ident: {
    type: String
  },
  login: {
    type: String
  },
  password: {
    type: String
  },
  name: {
    type: String
  },
  img: { type: String },

});

const User = mongoose.model("User", userSchem);
module.exports = User;
