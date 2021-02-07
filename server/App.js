require('dotenv').config();
const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();
//  router = express.Router()
const incidents = require('./routes/incidents.js');
const apis = require('./routes/apis')

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
