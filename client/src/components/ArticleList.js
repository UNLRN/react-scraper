import React from 'react';
import DeleteButton from './DeleteButton.js'

const ArticleList = ({articles, deleteHandler}) => (
    <div className='container'>
        {articles.map(({ title, url, articleId }) => {
            return (
                <div className='row' key={articleId}>
                    <DeleteButton articleId={articleId} deleteHandle={deleteHandler}/>
                    <h1>{title}</h1>
                    <h3>{url}</h3>
                </div>
            )
        })}
    </div>
)

export default ArticleList;