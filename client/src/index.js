import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Articles from './components/Articles.js'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path='/' component={App} />
			<Route path='/articles' component={Articles} />
		</div>
	</Router>,
	document.getElementById('root')
);

registerServiceWorker();
