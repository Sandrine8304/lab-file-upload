const express = require('express');
const router  = express.Router();
const uploadCloud = require('../config/cloudinary.js'); 

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express - Generated with IronGenerator',
    user: req.user
  });
});

module.exports = router;
