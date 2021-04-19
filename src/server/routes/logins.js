"use-strict"

const express = require('express');
const jsonData = require('./../../app/loginData.json');
// const jsonData = require('./../../src/app/IncidentData.json');
let router = express.Router();

router.route('/').get((req, res) => {
    res.send('logins parent!')
})

router.route('/get-logins-db')
    .get((req, res) => {
        res.send(jsonData)
        

        // MAKE SURE TO CHANGE OUT TO LOGIN COLLECTION DB:

        // var MongoClient = require('mongodb').MongoClient
        // MongoClient.connect('mongodb://localhost:27017/testing', function (err, client) {
        //     if (err) {
        //         throw err;
        //         // Throw HTTP Status Code instead 400* / 500*
        //         // res.json(err) make sure property has message + error;
        //     }
        //     // check if string type not object 
        //     var db = client.db('testing');
        //     db.collection('test').find().toArray(function (err, result) {
        //         if (err) throw err
        //         res.json(result);
        //     })
        // })
})


module.exports = router;