const express = require('express');
const router = express.Router();
const models = require('../../models');
const Comment = models.Comment;
const Article = models.Article;


router.post('/:id', function(req, res) {
    const articleId = req.params.id
    const text = req.body.text
    const date = Date.now()

    Article.findOne({articleId})
        .then(result => {
            console.log(result)
            const comment = new Comment({
                text: text,
                date: date,
                article: result
            })
            comment.save()
        })

    Comment.find()
        .then(result => res.json(result))
});


module.exports = router;