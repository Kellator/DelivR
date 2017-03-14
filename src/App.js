import React, { PropTypes } from 'react';
import { NavBar, HomeView } from './modules';

const App = ( {children, location} ) => (
    <div> 
    	<NavBar path={location.pathname} />
    	{ children }
    	<HomeView />
    </div>
);

App.PropTypes = {
	children: PropTypes.element.isRequired,
	location: PropTypes.object.isRequired
}

export default App;
