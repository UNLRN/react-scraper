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
            console.log(results)
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

router.put('/update/:articleId', function (req, res) {
	Article.find({articleId: req.params.id}, function(err, doc) {
		doc.comments.push('comments object');
		doc.save();
	})
})

router.delete('/delete/:articleId', function (req, res) {
	Article.findOneAndRemove({articleId: req.params.id}).exec();

})




module.exports = router;
