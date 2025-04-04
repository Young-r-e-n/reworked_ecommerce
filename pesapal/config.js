require('dotenv').config();

const config = {
    environment: process.env.APP_ENVIRONMENT || 'sandbox',
    pesapalUrl: process.env.APP_ENVIRONMENT === 'live'
        ? process.env.PESAPAL_LIVE_URL
        : process.env.PESAPAL_SANDBOX_URL,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    callbackUrl: process.env.CALLBACK_URL,
    ipnUrl: process.env.IPN_URL
};

module.exports = config;
