import React, { Component } from 'react';
import ArticleList from './ArticleList.js'

class ArticleContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { articles: [] }
	}

	componentDidMount() {
		fetch('/api/article/get-articles')
			.then(res => res.json())
			.then(articles => { this.setState({ articles })})
			.catch(err => {console.log(err)})
	}

	render() {
		return (
			<ArticleList articles={this.state.articles} />
		);
	}
}

export default ArticleContainer;