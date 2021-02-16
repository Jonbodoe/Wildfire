"use-strict"

const express = require('express');
let router = express.Router();

router.route('/').get((req, res) => {
    res.send('incidents parent!')
})

router.route('/get-incidents-db')
    .get((req, res) => {
        var MongoClient = require('mongodb').MongoClient
        MongoClient.connect('mongodb://localhost:27017/testing', function (err, client) {
            if (err) {
                throw err;
                // Throw HTTP Status Code instead 400* / 500*
                // res.json(err) make sure property has message + error;
            }
            // check if string type not object 
            var db = client.db('testing')
            db.collection('test').find().toArray(function (err, result) {
                if (err) throw err
                res.json(result);
            })
        })
    })


module.exports = router;


  // var MongoClient = require('mongodb').MongoClient
  // MongoClient.connect('mongodb://localhost:27017/Test', function (err, client) {
  //   if (err) throw err
  //   var db = client.db('Test')
  //   db.collection('TestingDB').find().toArray(function (err, result) {
  //     if (err) throw err
  //     res.json(result);
  //   })
  // })