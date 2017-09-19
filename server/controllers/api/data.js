const express = require('express');
const router = express.Router();
const models = require('../../models');
const Article = models.Article;

router.get('/', function(req, res, next) {
	Article.find()
	.populate('Comments')
	.then(result => res.send(result))
	
});

module.exports = router;