// Import Packages
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

// Import Router
const WeatherRouter = require('./routes/weather');

// Create Express App
const app = express();

// Rate Limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minitus
  max: 100,
})

// Middlewares
app.use(cors());
app.use(limiter);
app.set('trust proxy', 1);
// Declare Port Number
const PORT = 3000 

//Routes
app.use('/api', WeatherRouter);

// Listen to server
app.listen(PORT, ()=> {
  console.log(`Server listeden at ${PORT} port`);
})