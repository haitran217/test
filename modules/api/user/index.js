const express = require('express');

const Router = express.Router();

const userController = require('./userController')

Router.post('/use', (req, res) => {

  var userInfo = {
    username: req.query.username,
    pass: req.query.pass,
    email: req.query.email
  }

  console.log('post data ', userInfo);


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
