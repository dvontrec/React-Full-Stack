const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
	app.post('/auth/google/api/stripe', (req, res) => {});
};
