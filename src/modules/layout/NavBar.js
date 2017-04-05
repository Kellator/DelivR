import React from 'react';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router-dom';

const NavBar = ({ path }) => (
	<Menu>
		<Menu.Menu>
			<Menu.Item as={Link} to='/home'>
				DelivR
			</Menu.Item>
		</Menu.Menu>
		<Menu.Menu position="right">
			<Menu.Item active={path === '/about'} as={Link} to='/about'>
				About
			</Menu.Item>
			<Menu.Item active={path === '/more'} as={Link} to='/more'>
				More
			</Menu.Item>
		</Menu.Menu>
	</Menu>
);

export default NavBar;