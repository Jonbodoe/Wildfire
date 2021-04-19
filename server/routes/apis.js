"use-strict"
const express = require('express');
let router = express.Router();

router.route('/').get((req, res) => {
    res.send('apis!');
});

router
    .route('/mapbox')
    .get((req, res) => {
        res.send({
            token: process.env.MAPBOXGL_ACCESSTOKEN
        });
    });

module.exports = router;