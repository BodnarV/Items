var mongoose = require('../modules/mongoose.js');
var ItemsSchem = mongoose.Schema({

  name:{type:String},
  items:{type:String},

});

const Items = mongoose.model("Items", ItemsSchem);
module.exports = Items;
