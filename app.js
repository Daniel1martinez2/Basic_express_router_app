const http = require('http');
const express = require('express');
const path = require('path');
const usersRoute = require('./routes/usersRoute');
const homeRoute = require('./routes/homeRoute'); 

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')))
app.use('/users', usersRoute); 
app.use(homeRoute); 

server.listen(3000);