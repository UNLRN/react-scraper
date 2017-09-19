import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Api from './api';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path='/' component={App} />
			<Route path='/api' component={Api} />
		</div>
	</Router>,
	document.getElementById('root')
);

registerServiceWorker();
