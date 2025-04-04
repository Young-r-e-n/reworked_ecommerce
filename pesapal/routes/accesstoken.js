const express = require('express');
const axios = require('axios');
const config = require('../config');

const router = express.Router();

router.get('/accesstoken', async (req, res) => {
    try {
        const response = await axios.post(
            `${config.pesapalUrl}/Auth/RequestToken`,
            {
                consumer_key: config.consumerKey,
                consumer_secret: config.consumerSecret
            },
            { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } }
        );

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch access token', details: error.message });
    }
});

module.exports = router;
