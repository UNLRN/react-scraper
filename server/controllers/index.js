const express = require('express');
const router = express.Router();

router.use('/api/data', require('./api/data'))
router.use('/api/article', require('./api/article'))
router.use('/api/comment', require('./api/comment'))

module.exports = router;
