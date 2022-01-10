const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//Routes
const usersRoute = require('./routes/usersRoute');
const homeRoute = require('./routes/homeRoute');

const app = express();

let port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended:false}));

app.use('/users', usersRoute); 
app.use(homeRoute); 

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`);
});