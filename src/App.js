import React from 'react';
import { NavBar } from './modules';
import { HashRouter as Router, Route} from 'react-router-dom';
import { HomeView, About, More, Page404, ReturnedResultList } from './modules';
import './grid.css';
// import './index.css';


class App extends React.Component {

	render () {
		console.log(this.props);
		return (
			<Router>
			<div className="">
				<div> 
					<NavBar path={this.props.location.pathname} />
				</div>
				<div className="row body">
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
