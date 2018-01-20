
const mongoose = require("mongoose");

const userModel = require("./userModel");

const bcrypt = require('bcrypt');

var createUser = (data,callback)=>{
  userModel.find({}).select('id').sort({id:-1}).exec((err,doc)=>{
    if(err){
      console.log(err);
      callback(err);
    }else {
      var id = doc && doc.id ? doc.id += 1 : 1;
      data.id = id;
      userModel.create(data, (err, doc) => {
        if (err) {
          console.log(err);
          callback(err);
        } else {
          console.log(doc);
          callback(null, doc);
        }
      })
    }
  })
}

var getUserByUsername = (username, callback) => {
  try {
    userModel.findOne({username : username}).exec((err, user) => {
      if (err) {
        callback(err);
      } else {
        callback(null, user);
      }
    })
  } catch (e) {
    console.log(e);
    callback(e);
  }
}

var signIn = (data, callback) => {
  if (data && data.username && data.pass) {
    getUserByUsername(data.username, (err, user) => {
      if (user) {
        bcrypt.compare(data.pass, user.pass, (err, res) => {
          if (res) {
            callback(null, user);
          } else {
            callback('sai password');
          }
        })
      } else {
        callback('user not found');
      }
    })
  }
}

module.exports = {
  createUser,
  signIn

}
