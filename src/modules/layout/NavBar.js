import React from 'react';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router-dom';

const NavBar = ({ path }) => (
	<Menu className="menu-color">
		<Menu.Menu className="menu-color">
			<Menu.Item className="menu-color" as={Link} to='/'>
				Home
			</Menu.Item>
		</Menu.Menu>
		<Menu.Menu className="menu-color" position="right">
			<Menu.Item active={path === '/about'} as={Link} to='/about'>
				About
			</Menu.Item>
			<Menu.Item className="menu-color" active={path === '/more'} as={Link} to='/more'>
				More
			</Menu.Item>
		</Menu.Menu>
	</Menu>
);

export default NavBar;