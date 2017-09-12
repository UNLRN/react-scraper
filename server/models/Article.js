const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
	articleId: {
		type: String,
		required: true,
		unique: true,
	},
	title: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	site: {
		title: String,
		url: String
	},
	comments: [{
		body: String,
		date: Date
	}],
})

module.exports = mongoose.model('Article', ArticleSchema);