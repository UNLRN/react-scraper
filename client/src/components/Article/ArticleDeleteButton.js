import React from 'react';

const ArticleDeleteButton = ({eventHandler, articleId}) => {
    return (
        <button className='btn btn-danger' onClick={() => {eventHandler(articleId)}}>Delete</button>
    );
};

export default ArticleDeleteButton;