import React from 'react';
import { NavBar } from './modules';
import { HashRouter as Router, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { HomeView, About, More, ReturnedResultList } from './modules';
import './grid.css';
import './index.css';


class App extends React.Component {

	render () {
		return (
			<Router>
			<div>
				<div className="row body result_center_rail">
					<div > 
						<NavBar path={this.props.location.pathname} />
					</div>
					<Route exact path="/" component={HomeView} />
					<Route path="/about" component={About} />
					<Route path="/more" component={More} />
					<Route path="/results" component={ReturnedResultList} />
				</div>
			</div>
			</Router>
		)
	}
}

export default App;
