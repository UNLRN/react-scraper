import React, { Component } from 'react';
import ScrapeButton from './components/Article/ScrapeButton'
import ArticleContainer from './components/Article/ArticleContainer.js';
import actions from './utils/actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            activeArticle: {}
        }
        this.scrape = actions.scrape.bind(this)
        this.getArticles = actions.getArticles.bind(this)
        this.deleteArticles = actions.deleteArticles.bind(this)
    }

    

    render() {
        return (
            <div className="App">
                <div className='container'>
                    <ScrapeButton handler={this.scrape} />
                    <ArticleContainer
                        articles={this.state.articles}
                        getAction={this.getArticles}
                        deleteAction={this.deleteArticles}
                        viewAction={this.viewArticle}
                    />
                </div>
            </div>
        );
    }
}

export default App;
