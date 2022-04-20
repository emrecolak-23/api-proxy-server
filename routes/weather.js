// Import Packages
const express = require('express');

// Create express router
const router = express.Router();

router.route('/').get((req,res)=>{
  res.json({
    success: true
  })
})

module.exports = router