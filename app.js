const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config.json');
const userRouter = require(__dirname + '/modules/api/user/');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ extended : true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/user',userRouter)

mongoose.connect(config.connnectionString,(err) => {
  if(err){
    console.log(err);
  }else{
    console.log('ok');
  }
})

app.listen(config.port, (req, res) => {
  console.log(`app listen on ${config.port}`);
})
