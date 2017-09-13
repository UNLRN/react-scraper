const express = require('express');
const router = express.Router();
const Article = require('../../models/Article');
const scraper = require('../../util/scraper');

router.get('/get-articles', function (req, res, next) {
	Article.find()
		.then(results => { res.json(results) })
		.catch(err => { console.log(err) })
});

router.post('/insert', function (req, res) {
	scraper()
		.then(results => {
			results.forEach(result => {
				Article.find({ articleId: result.articleId }, null, {limit: 1}, function (err, docs) {
					if (docs.length == 0) {
						new Article(result).save();
					}
				})
			})
			res.status(200);
			res.send('Web Scraped');
		})
		.catch(err => {
			res.status(500);
			res.send(err);
		})
})

module.exports = router;
