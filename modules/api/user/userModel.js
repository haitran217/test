const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const ObjectId = Schema.ObjectId;

var userModel  = new Schema({
  id : {type : Number,required: true},
  username : {type : String,required: true},
  pass : {type : String,required: true},
  email : {type : String,required: true},
});

userModel.index({username : "text", email : "text"});

userModel.pre('save', function (next) {
  var user = this;
  console.log("this is user",user);

  if (!user.isModified('pass')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.pass, salt, (err, hash) => {
      user.pass = hash;
      next();
    })
  })
});

module.exports = mongoose.model('user',userModel);
