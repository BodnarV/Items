var mongoose = require('../modules/mongoose.js');
var CommentSchem = mongoose.Schema({

  text: { type: String },
  img: { type: String },
  team: { type: String },

});

const Comment = mongoose.model("Comment", CommentSchem);
module.exports = Comment;
