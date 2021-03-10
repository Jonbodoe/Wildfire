"use-strict"

const express = require('express');
// const jsonData = require('./../../src/app/IncidentData.json');
let router = express.Router();

router.route('/auth').get((req, res) => {
    res.send('authing')
})

module.exports = router;