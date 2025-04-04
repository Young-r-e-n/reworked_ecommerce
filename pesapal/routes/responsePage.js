const express = require('express');
const axios = require('axios');
const config = require('../config');

const router = express.Router();

router.get('/response-page', async (req, res) => {
    const { OrderTrackingId } = req.query;
    const { token } = req.body;

    if (!OrderTrackingId) {
        return res.status(400).json({ error: 'Missing OrderTrackingId' });
    }

    try {
        const response = await axios.get(
            `${config.pesapalUrl}/Transactions/GetTransactionStatus?orderTrackingId=${OrderTrackingId}`,
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
        res.status(500).json({ error: 'Failed to get transaction status', details: error.message });
    }
});

module.exports = router;
