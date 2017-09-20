import React, { Component } from 'react';
import ArticleList from './ArticleList.js';

class ArticleContainer extends Component {
    
    componentDidMount() {
        this.props.getAction();
    }

    render() {
        return (
            <div>
                <ArticleList
                    articles={this.props.articles}
                    eventHandler={this.props.deleteAction} />
            </div>
        );
    }
}

export default ArticleContainer;