import React from 'react';
import DeleteButton from './DeleteButton.js'

const ArticleList = ({articles, deleteHandler}) => (
    <div className='container'>
        <div className='row'>
            {articles.map(({ title, url, articleId }) => {
                return (
                    <div className='card w-100' key={articleId}>
                        <div>
                            <h1>{title}</h1>
                            <h3>{url}</h3>
                            <DeleteButton articleId={articleId} deleteHandle={deleteHandler}/>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
)

export default ArticleList;