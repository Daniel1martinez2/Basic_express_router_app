const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//Routes
const usersRoute = require('./routes/usersRoute');
const homeRoute = require('./routes/homeRoute');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended:false}));

app.use('/users', usersRoute); 
app.use(homeRoute); 

app.listen(3000);