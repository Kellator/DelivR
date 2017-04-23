import React from 'react';
const styles = {
	links : {
		color: 'white',
		textDecoration: 'underline',
		fontWeight: 'normal'
	},
	lists : {
		listStyle: 'square'
	}
}
const About = () => (
	<div className="col_12 about">
		<h1 className="">About DelivR</h1>
		<p className="">DelivR was developed as the capstone project for <a style={styles.links} href="https://www.thinkful.com/">Thinkful's Flexible Web Development</a> React/Redux unit.</p>
		<p className="">DelivR uses the Yelp Fusion Transaction Search API.  At this time, the API does not return businesses without any reviews.</p>
		<p className="">The transaction type is set for delivery and currently only supports delivery within the U.S.</p>
		<h3 className="">Project Requirements</h3>
		<p className="">Make use of one or more third party APIs and come up with an app that does something interesting.</p>
		<h3 className="">High-Level Requirements</h3>
		<ul className="style={styles.lists}">
			<li className="">Create a single page: The overarching user-experience should pull data from one or more third-party APIs and display the data to the user.</li>
			<li className="">Make an app that does something interesting.</li>
			<li className="">Use React, React Router, and Redux - the main technologies taught in the unit.</li>
			<li className="">Comprehensive unit testing and continuous integration.</li>
			<li className="">Have a polished appearance for the final version.  Implement an MVP, get feedback from testers, and use the feedback to develop a polished finished product.</li>
			<li className="">Make the app responsive.  It should work on both mobile and desktop.  This should be accomplished using CSS and media queries.</li>
		</ul>
		<h3 className="">Why did I choose to make this app?</h3>
		<p className="">I've moved around a lot in my life.  When you move somewhere new, start a new job, or even visit someone in a place you're not familiar with, you probably get hungry and may not want to cook something.  How do you know who delivers to where you are?  I wanted to make it easier to figure that out so, I developed DelivR.</p>
		<h3 className="">Technology Used</h3>
		<p className="">This project was bootstrapped with <a style={styles.links} href="https://github.com/facebookincubator/create-react-app">Create React App</a>.</p>
		<p className="">DelivR uses the <a style={styles.links} href="https://www.yelp.com/developers/documentation/v3">Yelp Fusion API</a>.</p>
		<ul className="style={styles.lists}"> 
			<li className="">React v.15.4.2</li>
			<li className="">React-Redux v.5.0.3</li>
			<li className="">React-Router-Dom</li>
			<li className="">React-Router-Redux v. 4.0.8</li>
			<li className="">Redux-Form v.6.5.0</li>
			<li className="">Redux-Thunk v2.2.0</li>
			<li className="">Axios v0.15.3</li>
		</ul>
		<h4>Interested in more?  Check me out on GitHub at <a style={styles.links} href="https://github.com/Kellator">Kellator</a> or email me at <a style={styles.links} href="mailto:k.macleod21@gmail.com">Kelly Miller</a></h4>
	</div>
);

export default About;