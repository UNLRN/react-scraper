import React from 'react';

const CommentForm = () => {
	return (
		<div>
			<form onSubmit=''>                
				<div className="form-group">
					<label for="commentBox" className="col-sm-2">Leave a Comment</label>														
					<textarea name="comment" id='commentBox' className="form-control" rows="5" required="required"></textarea>
					
				</div>               
			
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

export default CommentForm;
