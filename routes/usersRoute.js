const path = require('path'); 
const express = require('express');
const router = express.Router(); 

router.get('/', (req, res)=>{
  //if there is no body parser -> the console log below will throw undefined
  console.log(req.body);
  res.sendFile(path.join(__dirname, '..', 'views', 'users.html'))
})

module.exports =router; 