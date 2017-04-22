import React from 'react';
import { browserHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import '../../grid.css';
import '../../index.css';

const NoResult = () => (
	<div >
		<h1>I'm sorry.  Your search returned no results.</h1>
        <h1>Try again with a different type of cuisine or different location.</h1>
		<li className="nav-list "><NavLink className="nav-link" activeClassName="selected" to='/'>Home</NavLink></li>
	</div>
);

export default NoResult;