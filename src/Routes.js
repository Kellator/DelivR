import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from './redux/store';
import App from './App';
import { HomeView, About, More, Page404 } from './modules';

export default () => (
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={HomeView} />
			<Route path="/about" component={About} />
			<Route path="/more" component={More} />
		</Route>
		<Route path="*" component={Page404} />
	</Router>
);