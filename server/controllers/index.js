const express = require('express');
const router = express.Router();
const axios = require('axios');

router.use('/api/article', require('./api/article'))

module.exports = router;
