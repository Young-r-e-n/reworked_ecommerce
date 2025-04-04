const express = require('express');
const axios = require('axios');
const config = require('../config');

const router = express.Router();

router.post('/register-ipn', async (req, res) => {
    const { token } = req.body; // Token must be passed in the request

    try {
        const response = await axios.post(
            `${config.pesapalUrl}/URLSetup/RegisterIPN`,
            { url: config.ipnUrl, ipn_notification_type: "POST" },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to register IPN', details: error.message });
    }
});

module.exports = router;
