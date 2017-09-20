import React from 'react';

const CommentList = ({activeArticle, eventHandler}) => {
    return (
        <div className='container'>
        <div className='row'>
            {activeArticle.comments.map(({ _id, text, date }) => {
                return (
                    <CommentItem
                        key={_id}
                        text={text}
                        date={date}
                        eventHandler={eventHandler}
                    />
                )
            })}
        </div>
    </div>
    );
};

export default Comments;