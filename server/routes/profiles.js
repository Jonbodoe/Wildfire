"use-strict"

const express = require('express');
const jsonData = require('./../../src/app/profilesData.json');
let router = express.Router();

router.route('/').get((req, res) => {
    res.send('profiles parent!')
})

router.route('/get-profiles-db')
    .get((req, res) => {
        res.json(jsonData)
        console.log('getting profiles data')
})


module.exports = router;