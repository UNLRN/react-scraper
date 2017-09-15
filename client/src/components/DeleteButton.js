import React from 'react';

const DeleteButton = ({deleteHandle, articleId}) => {
    return (
        <button onClick={() => {deleteHandle(articleId)}}>Delete</button>
    );
};

export default DeleteButton;