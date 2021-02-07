"use-strict"
const express = require('express');
let router = express.Router();

router.route('/').get((req, res) => {
    res.send('incidents parent!')
})

router
    .route('/mapbox')
    .get((req, res) => {
        res.send('helllo from get')
    })
    .post((req, res) => {
    });

// function incidents() {
//     router.get('/getIncidentsDb', function (req, res) {
//         var MongoClient = require('mongodb').MongoClient
//         MongoClient.connect('mongodb://localhost:27017/Test', function (err, client) {
//             if (err) throw err
//             var db = client.db('Test')
//             db.collection('TestingDB').find().toArray(function (err, result) {
//                 if (err) throw err
//                 res.json(result);
//             })

//         })
//     })
// }

module.exports = router;