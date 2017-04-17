import React from 'react';
import { browserHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

const NavBar = ({ path }) => (
	<div className="Grid-cell menu  " >
		<ul className="Grid navigation">
			<li className="Grid-cell  nav-list float-left"><NavLink activeClassName="selected" to='/'>Home</NavLink></li>
			<li className="Grid-cell  nav-list float-right"><NavLink  activeClassName="selected" to='/about'>About</NavLink></li>
			<li className="Grid-cell  nav-list float-right"><NavLink  activeClassName="selected" to='/more'>More</NavLink></li>
		</ul>
	</div>
);

export default NavBar;