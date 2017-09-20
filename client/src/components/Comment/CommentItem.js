import React from 'react';
// import CommentDeleteButton from './CommentDeleteButton.js';

const CommentItem = (props) => {
    let id = props._id;
    let text = props.text;
    let date = props.date;
    // let eventHandler = props.eventHandler

    return (
        <div className='card w-100 m-3 p-3' id={id}>
            <div>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default CommentItem;