import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import ArticleContainer from './components/Article/ArticleContainer.js'
import CommentContainer from './components/Comment/CommentContainer.js'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path='/' component={App} />
			<Route exact path='/articles' component={ArticleContainer} />
            <Route path='/articles/:id' component={CommentContainer} />
		</div>
	</Router>,
	document.getElementById('root')
);

registerServiceWorker();
