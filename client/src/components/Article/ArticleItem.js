import React from 'react';
import ArticleDeleteButton from './ArticleDeleteButton.js';

const ArticleItem = (props) => {
    let articleId = props.articleId;
    let title = props.title;
    let url = props.url;
    let eventHandler = props.eventHandler

    return (
        <div className='card w-100 m-3 p-3' id={articleId}>
            <div>
                <p>{title}</p>
                <a className='d-block' href={url}>{url}</a>
                <ArticleDeleteButton articleId={articleId} eventHandler={eventHandler}/>
            </div>
        </div>
    );
};

export default ArticleItem;