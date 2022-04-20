// Import Packages
const express = require('express');
const cors = require('cors');
require('dotenv').config()

// Import Router
const WeatherRouter = require('./routes/weather');

// Create Express App
const app = express();

// Middlewares
app.use(cors());

// Declare Port Number
const PORT = 3000 

//Routes
app.use('/api', WeatherRouter);

// Listen to server
app.listen(PORT, ()=> {
  console.log(`Server listeden at ${PORT} port`);
})