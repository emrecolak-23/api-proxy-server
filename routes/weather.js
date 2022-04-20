// Import Packages
const express = require('express');
const apicache = require('apicache')
// Import Controller
const WeatherController = require('../controllers/weatherController');

// Init cache
let cache = apicache.middleware


// Create express router
const router = express.Router();

router.route('/').get(cache('2 minutes'),WeatherController.requestFromServer);

module.exports = router