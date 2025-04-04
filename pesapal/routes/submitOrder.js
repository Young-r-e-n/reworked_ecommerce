const express = require('express');
const axios = require('axios');
const config = require('../config');

const router = express.Router();

router.post('/submit-order', async (req, res) => {
    const { token, ipn_id } = req.body;

    const merchantReference = Math.floor(Math.random() * 1000000000).toString();
    const orderData = {
        id: merchantReference,
        currency: "KES",
        amount: 10.00,
        description: "Payment for services",
        callback_url: config.callbackUrl,
        notification_id: ipn_id,
        branch: "UMESKIA SOFTWARES",
        billing_address: {
            email_address: "alvo967@gmail.com",
            phone_number: "0768168060",
            country_code: "KE",
            first_name: "Alvin",
            middle_name: "Odari",
            last_name: "Kiveu",
            line_1: "Pesapal Limited",
            city: "",
            state: "",
            postal_code: "",
            zip_code: ""
        }
    };

    try {
        const response = await axios.post(
            `${config.pesapalUrl}/Transactions/SubmitOrderRequest`,
            orderData,
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
        res.status(500).json({ error: 'Failed to submit order', details: error.message });
    }
});

module.exports = router;
