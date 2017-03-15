import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { history } from './redux/store';
import App from './App';
import { HomeView, About, More, Page404 } from './modules';

export default () => (
	<Router history={history}>
		<div>
			<Route path="/" component={App} />
			<Route exact path="/" component={HomeView} />
			<Route path="/about" component={About} />
			<Route path="/more" component={More} />
			<Route path="/Page404" component={Page404} />
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/more">More</Link></li>
			</ul>

		</div>
	</Router>
);