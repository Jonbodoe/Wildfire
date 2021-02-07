require('dotenv').config();
const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();
//  router = express.Router()
const incidents = require('./routes/incidents.js');
const apis = require('./routes/apis')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(express.urlencoded());
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.send('helllooooooo world');
});

app.use('/incidents', incidents);

app.use('/api', apis);

app.listen(process.env.PORT || 8080);
