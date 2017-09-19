import React, { Component } from 'react';
import CommentForm from './CommentForm.js';

class CommentContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            comments: []
        }
        
    }
    
    render() {
        return (
            <div className='container'>
                <CommentForm />
            </div>
        );
    }
}

export default CommentContainer;