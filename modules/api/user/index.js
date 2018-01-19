const express = require('express');

const Router = express.Router();

const userController = require('./userController')

Router.post('/', (req, res) => {

  var userInfo = {
    username: req.body.username,
    pass: req.body.pass,
    email: req.body.email
  }

  console.log('post data ', req.body);


  userController.createUser(userInfo, (err, doc) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send("Success");
    }
  });
});

module.exports = Router;
