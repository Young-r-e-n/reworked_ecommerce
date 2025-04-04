const express = require('express');
const axios = require('axios');
const config = require('../config');

const router = express.Router();

router.get('/registered-ipns', async (req, res) => {
    const { token } = req.query; // Pass token in query string

    try {
        const response = await axios.get(
            `${config.pesapalUrl}/URLSetup/GetIpnList`,
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
        res.status(500).json({ error: 'Failed to fetch IPNs', details: error.message });
    }
});

module.exports = router;
