import React, { PropTypes } from 'react';
import { NavBar } from './modules';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { HomeView, About, More, Page404, ReturnedResultList } from './modules';

class App extends React.Component {

	render () {
		console.log(this.props);
		return (
			<div>
				<div> 
					<NavBar path={this.props.location.pathname} />
				</div>
				<div>
					<Route path="/home" component={HomeView} />
					<Route path="/about" component={About} />
					<Route path="/more" component={More} />
					<Route path="/results" component={ReturnedResultList} />
				</div>
			</div>
		)
	}
}

// App.PropTypes = {
// 	children: PropTypes.element.isRequired,
// 	location: PropTypes.object.isRequired
// }

export default App;
