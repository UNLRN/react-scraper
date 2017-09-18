import React from 'react';

const Comments = ({commentList}) => {
    return (
        <div>
        {commentList.map((comment) => {
            <div>
                <h3>{comment.date}</h3>
                <p>{comment.body}</p>
            </div>
            })}
        </div>
    );
};

export default Comments;