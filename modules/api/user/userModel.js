const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userModel  = new Schema({
  id : {type : Number,required: true},
  username : {type : String,required: true},
  pass : {type : String,required: true},
  email : {type : String,required: true},
});

module.exports = mongoose.model('user',userModel);
