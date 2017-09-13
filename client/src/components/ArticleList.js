import React from 'react';

const ArticleList = ({articles}) => (
	<div>
		{articles.map(({title, url, articleId}) => {
			return (
				<div key={articleId}>
					<h1>{title}</h1>
					<h3>{url}</h3>
				</div>
			)
		})}
	</div>
)

export default ArticleList;