import React, { PropTypes } from 'react';
import { NavBar } from './modules';
import { HashRouter as Router, Route} from 'react-router-dom';
import { HomeView, About, More, Page404, ReturnedResultList } from './modules';

class App extends React.Component {

	render () {
		console.log(this.props);
		return (
			<Router>
			<div>
				<div> 
					<NavBar path={this.props.location.pathname} />
				</div>
				<div>
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

// App.PropTypes = {
// 	children: PropTypes.element.isRequired,
// 	location: PropTypes.object.isRequired
// }

export default App;
