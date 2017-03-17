import React, { PropTypes } from 'react';
import { NavBar } from './modules';

const App = ( {children, location} ) => (
    <div> 
    	<NavBar path={location.pathname} />
    </div>
);

App.PropTypes = {
	children: PropTypes.element.isRequired,
	location: PropTypes.object.isRequired
}

export default App;
