import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { history } from './redux/store';
import App from './App';
import { HomeView, About, More, Page404, ReturnedResultList } from './modules';

export default () => (
	<Router history={history}>
		<div>
			<Route path="/" component={App} >
			</Route>
		</div>
	</Router>
);