import React from 'react';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router-dom';

const styles = {
	head: {
		border: '1px solid #3e3e3e',
  		borderRadius: '0',
		borderTopLeftRadius: '0',
		borderTopRightRadius: '0',
  		minHeight: '2.85714286em'
	},
	textWeight: {
		fontWeight: 'bold'
	}
}
const NavBar = ({ path }) => (
	<Menu className="menu-color" style={styles.head}>
		<Menu.Menu className="menu-color">
			<Menu.Item className="menu-color" style={styles.textWeight} as={Link} to='/'>
				Home
			</Menu.Item>
		</Menu.Menu>
		<Menu.Menu className="menu-color" style={styles.textWeight} position="right">
			<Menu.Item active={path === '/about'} as={Link} to='/about'>
				About
			</Menu.Item>
			<Menu.Item className="menu-color" style={styles.textWeight} active={path === '/more'} as={Link} to='/more'>
				More
			</Menu.Item>
		</Menu.Menu>
	</Menu>
);

export default NavBar;