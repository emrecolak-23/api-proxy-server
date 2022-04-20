// Import Packages
const express = require('express');
const cors = require('cors');

// Create Express App
const app = express();

// Middlewares
app.use(cors());

// Declare Port Number
const PORT = 3000 

// Server Request
app.get('/', (req, res)=> {
  res.send('This is a proxy server');
})

// Listen to server
app.listen(PORT, ()=> {
  console.log(`Server listeden at ${PORT} port`);
})