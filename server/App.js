require('dotenv').config();
const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();
const incidents = require('./routes/incidents.js');
const apis = require('./routes/apis');
const logins = require('./routes/logins');
const updates = require('./routes/updates');
const profiles = require('./routes/profiles');

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
  // res.send('helllooooooo world');
  console.log('hello world from serverside')
});

app.use('/logins', logins);
app.use('/incidents', incidents);
app.use('/updates', updates);
app.use('/profiles', profiles);

app.use('/api', apis);


// app.use(express.static(path.resolve(__dirname, './build')));

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));


// app.listen(PORT, () => {
//   console.log(`server started on port ${PORT}`);
// });


app.listen(process.env.PORT || 8080);
