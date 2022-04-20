// Import Packages
const express = require('express');

// Import Controller
const WeatherController = require('../controllers/weatherController');

// Create express router
const router = express.Router();

router.route('/').get(WeatherController.requestFromServer);

module.exports = router