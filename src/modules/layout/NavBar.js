import React from 'react';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router-dom';

const NavBar = ({ path }) => (
	<div className="Grid-cell" >
		<div className="Grid  menu">
			<div className="Grid-cell Grid-cell--top ">
				<ul>
					<li><Link to='/'>Home</Link></li>
				</ul>
			</div>	
			<div className="Grid-cell Grid-cell--bottom">
				<ul>
					<li><Link to='/about'>About</Link></li>
					<li><Link to='/more'>More</Link></li>
				</ul>
			</div>
		</div>
	</div>
);

export default NavBar;