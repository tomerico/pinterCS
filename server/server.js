const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users/index');
const cardsData = require('./cardsData/index');
const path = require('path');
const server = express();//server is express application, not must to be server can be called app

server.use(bodyParser.json());
server.use("/api/users/", users);//access the url IP:port/api/users/ it calls to users which is users/index.js file
server.use("/api/cardsData/", cardsData);

const distFolder = path.join(__dirname, '../client/build');
server.use(express.static(distFolder));

server.listen(9092);
console.log("pinterest server starts, run on port:9092");