import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { history } from './redux/store';
import App from './App';
import { HomeView, About, More, Page404, Results } from './modules';

export default () => (
	<Router history={history}>
		<div>
			<Route path="/" component={App} />
			<Route  exact path="/" component={HomeView} />
			<Route path="/about" component={About} />
			<Route path="/more" component={More} />
			<Route path="/results" component={Results} />
		</div>
	</Router>
);