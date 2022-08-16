const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const PORT = 3000;

mongoose.connect(
  'mongodb://localhost:27017/menv',
);

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

http.createServer({}, app).listen(PORT);

console.log(`server${PORT}`)