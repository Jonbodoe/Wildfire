"use-strict"

const express = require('express');
const jsonData = require('./../../src/app/updatesData.json');
let router = express.Router();

router.route('/').get((req, res) => {
    res.send('updates parent!')
})

router.route('/get-updates-db')
    .get((req, res) => {
        res.send(jsonData)
        // console.log('getting updates data')
})


module.exports = router;