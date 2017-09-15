const cheerio = require('cheerio');
const axios = require('axios');

module.exports = function () {
    console.log(`scraping...`);
	return new Promise((resolve, reject) => {
		axios('https://news.ycombinator.com/')
			.then(response => {
				const $ = cheerio.load(response.data);
				let arr = []

				let stories = $('.athing');
				stories.each((i, element) => {
					
					let articleId = $(element).attr('id');
					let title = $(element).find('.storylink').text();
					let url = `https://news.ycombinator.com/item?id=${articleId}`
					let site = $(element).find('.sitestr').text();
					let siteurl = $(element).find('.sitebit').children('a').attr('href');
					
					arr.push({
						articleId,
						title,
						url,
						site: {
							title: site,
							url: siteurl,
						},
					})
				})
				resolve(arr);
			})
			.catch(err => { reject(err) })
	})
}