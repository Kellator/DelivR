import React from 'react';

const More = () => (
	<div className="about">
		<h1>Frequently Asked Questions</h1>
		<h3>Why doesn't my favorite restaurant show up in the results?</h3>
		<p>There are a couple of reasons this might be happening.  First, if your favorite eatery doesn't deliver, it's not going to show up in DelivR.</p>  
		<p>Second, if Yelp's Fusion API doesn't have your favorite eatery listed with the transaction type 'delivery', it also won't show up in the results.</p>
		<p>Next, if the location doesn't have any reviews on Yelp, it won't show up in DelivR.</p>
		<p>Lastly, check your spelling.  If you've spelled what you're looking for correctly and the location or zipcode is correct, there may not be a delivery place available for you.  Try a different type of food.</p>
		<h3>I know that there are places that deliver 'insert cuisine type here' so why isn't anything showing up in the results?</h3>
		<p>Unfortunately, if a restaurant is not listed in the Yelp Fusion API as having a transaction type of 'delivery', it will not show up in DelivR's search results.</p>
		<p>Don't be too specific in your search terms for cuisine.  If you want a taco, try searching for Mexican.</p>
		<p>If a location is closed, it will not show up in the search results.</p>
		<p>Keep in mind that, at this time, this app only works in the U.S.</p>
	</div>
);

export default More;