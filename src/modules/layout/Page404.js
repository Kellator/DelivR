import React from 'react';
import { Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

const styles = {
	root: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: '80vh',
		flexDirection: 'column'
	}
}
const Page404 = () => (
	<div style={styles.root}>
		<h1>Page not found 404</h1>
		<button onclick={ () => browserHistory.push("/") }>Come back</button>
	</div>
);

export default Page404;