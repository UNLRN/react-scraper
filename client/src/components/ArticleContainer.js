import React, { Component } from 'react';
import ScrapeButton from './ScrapeButton.js';
import ArticleList from './ArticleList.js';

class ArticleContainer extends Component {
	constructor(props) {
		super(props);
        this.state = { articles: [] }
        this.scrape = this.scrape.bind(this);
        this.getArticles = this.getArticles.bind(this);
        this.deleteArticles = this.deleteArticles.bind(this);
	}

    scrape() {
        fetch('api/article/insert', {method: 'POST'})
            .then(res => {
                console.log('getting articles...')
                this.getArticles();
            }).catch(err => console.log(err))
    }

    deleteArticles(id) {
        console.log('deleting article...');
        fetch(`api/article/delete/${id}`, {method: 'DELETE'})
            .then(res => {
                console.log('deleted article...')
                this.getArticles();
            }).catch(err => console.log(err));
    }

    getArticles() {
        fetch('/api/article/get-articles')
            .then(res => res.json())
            .then(articles => { this.setState({ articles })})
            .catch(err => {console.log(err)})
    }

	componentDidMount() {
        this.getArticles();
	}

	render() {
		return (
            <div>
                <ScrapeButton handler={this.scrape} />
                <ArticleList articles={this.state.articles} deleteHandler={this.deleteArticles} />
            </div>
		);
	}
}

export default ArticleContainer;