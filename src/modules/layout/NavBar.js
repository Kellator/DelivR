import React, { PropType } from 'react';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

//stateless component for nav bar.  arrow function in onclick bind
const NavBar = ({ path }) => (
	<Menu>
		<Menu.Menu>
			<Menu.Item onClick={() => browserHistory.push('/')}>
				DelivR
			</Menu.Item>
		</Menu.Menu>
		<Menu.Menu position="right">
			<Menu.Item active={path === '/about'} onClick={() => browserHistory.push('/about')}>
				About
			</Menu.Item>
			<Menu.Item active={path === '/more'} onClick={() => browserHistory.push('/more')}>
				Item Two
			</Menu.Item>
		</Menu.Menu>
	</Menu>
);

// NavBar.propTypes = {
// 	path: PropType.string.isRequired
// }
export default NavBar;