import React from 'react';
const styles = {
	links : {
		color: 'white',
		textDecoration: 'underline'
	}
}
const About = () => (
	<div className="flex-item space-small">
		<h1 className="flex-item">About DelivR</h1>
		<p className="flex-item">DelivR was developed as the capstone project for <a style={styles.links} href="https://www.thinkful.com/">Thinkful's Flexible Web Development</a> React/Redux unit.</p>
		<p>DelivR uses the Yelp Fusion Transaction Search API.  At this time, the API does not return businesses without any reviews.</p>
		<p>The transaction type is set for delivery and currently only supports delivery within the U.S.</p>
		<h3>Project Requirements</h3>
		<p>Make use of one or more third party APIs and come up with an app that does something interesting.</p>
		<h3>High-Level Requirements</h3>
		<ul>
			<li>Create a single page: The overarching user-experience should pull data from one or more third-party APIs and display the data to the user.</li>
			<li>Make an app that does something interesting.</li>
			<li>Use React, React Router, and Redux - the main technologies taught in the unit.</li>
			<li>Comprehensive unit testing and continuous integration.</li>
			<li>Have a polished appearance for the final version.  Implement an MVP, get feedback from testers, and use the feedback to develop a polished finished product.</li>
			<li>Make the app responsive.  It should work on both mobile and desktop.  This should be accomplished using CSS and media queries.</li>
		</ul>
		<h3>Why did I choose to make this app?</h3>
		<p>I've moved around a lot in my life.  When you move somewhere new, start a new job, or even visit someone in a place you're not familiar with, you probably get hungry and may not want to cook something.  How do you know who delivers to where you are?  I wanted to make it easier to figure that out so, I developed DelivR.</p>
		<h3>Technology Used</h3>
		<p>This project was bootstrapped with <a style={styles.links} href="https://github.com/facebookincubator/create-react-app">Create React App</a>.</p>
		<p>DelivR uses the <a style={styles.links} href="https://www.yelp.com/developers/documentation/v3">Yelp Fusion API</a>.</p>
		<ul> 
			<li>React v.15.4.2</li>
			<li>React-Redux v.5.0.3</li>
			<li>React-Router-Dom</li>
			<li>React-Router-Redux v. 4.0.8</li>
			<li>Redux-Form v.6.5.0</li>
			<li>Semantic-Ui-React v.0.67.1</li>
			<li>Redux-Thunk v2.2.0</li>
		</ul>
	</div>
);

export default About;