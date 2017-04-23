import React from 'react';
import { browserHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import '../../grid.css';
import '../../index.css';

const NoResult = () => (
	<div className="col_12 no-result-div">
		<h2 className="">I'm sorry.  Your search returned no results.</h2>
        <h3 className="">Try again with a different type of cuisine or different location.</h3>
		<button className="no-result-button"><NavLink className="home-link" to='/'>Home</NavLink></button>
	</div>
);

export default NoResult;