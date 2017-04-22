import React from 'react';
import { Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Page404 = () => (
	<div >
		<h1>Page not found 404</h1>
		<button as={Link} to='/'>Come back</button>
	</div>
);

export default Page404;