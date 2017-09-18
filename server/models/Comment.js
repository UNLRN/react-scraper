const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    text: String,
    date: Date,
    article: { type: Schema.Types.ObjectId, ref: 'Article' },
})

module.exports = mongoose.model('Comment', CommentSchema);