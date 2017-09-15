import React from 'react';

const DeleteButton = ({deleteHandle, articleId}) => {
    return (
        <button className='btn btn-danger' onClick={() => {deleteHandle(articleId)}}>Delete</button>
    );
};

export default DeleteButton;