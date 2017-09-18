import React from 'react';
import ArticleItem from './ArticleItem.js';

const ArticleList = ({articles, eventHandler}) => (
    <div className='container'>
        <div className='row'>
            {articles.map(({ title, url, articleId }) => {
                return (
                    <ArticleItem
                        key={articleId}
                        title={title}
                        url={url}
                        articleId={articleId}
                        eventHandler={eventHandler}
                    />
                )
            })}
        </div>
    </div>
)

export default ArticleList;