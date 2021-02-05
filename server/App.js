require('dotenv').config();
const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();

app.use(express.urlencoded());
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.send('helllooooooo')
});

app.get('/api', function (req, res) {
  //  res.send('hellooo')
   var MongoClient = require('mongodb').MongoClient
   MongoClient.connect('mongodb://localhost:27017/Test', function (err, client) {
   //   if (err) throw err
     var db = client.db('Test')  
     db.collection('TestingDB').find().toArray(function (err, result) {
       // if (err) throw err
       res.json(result);
     })
})

})

app.listen(process.env.PORT || 8080);
