import React from 'react';
import Search from './search';

const styles = {
	head: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		padding: 50
	}
}
const HomeView = () => ( 
	<div>
		<div style={styles.head}>
		    <h1> DelivR < /h1>   
		    <p> Hungry?  Nothing in the kitchen?  Don't want to go out? < /p>
		    <p>Let DelivR find you dinner that delivers!</p> 
	    </div>
	    <Search />
	</div>
);

export default HomeView;