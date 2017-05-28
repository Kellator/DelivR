import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../grid.css';
import '../../index.css';


const NavBar = ({ path }) => (
	<div className="menu" >
		<ul className="navigation">
			<li className="nav-list "><NavLink className="nav-link" activeClassName="selected" to='/'>Home</NavLink></li>
			<li className="nav-list "><NavLink className="nav-link" activeClassName="selected" to='/about'>About</NavLink></li>
			<li className="nav-list "><NavLink className="nav-link" activeClassName="selected" to='/more'>FAQ</NavLink></li>
		</ul>
	</div>
);

export default NavBar;