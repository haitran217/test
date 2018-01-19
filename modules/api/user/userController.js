
const mongoose = require("mongoose");

const userModel = require("./userModel");

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

module.exports = {
  createUser

}
