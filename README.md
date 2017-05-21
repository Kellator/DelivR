# DelivR
## Developed as the capstone project for Thinkful Full-Stack Web Development Bootcamp React/Redux Unit.
### Introduction to DelivR
DelivR allows a user to search the Yelp Fusion API for a restaurant that delivers food to wherever you are.  Currently, Delivr works in the United States.
Search for what you're hungry for by entering the cuisine type (Pizza) and your current location or zipcode (Boston, MA)
If the type of cuisine you're looking for is not available in your location, you will be prompted to try again with different search criteria.
### Usecase:  Why is DelivR useful?
Have you ever started a new job, moved to a new location, or maybe you're just starting out at college and you're hungry?  You don't know what's around to eat
but you could really go for some General Tso's or a BBQ Chicken Pizza.  DelivR will allow you to put in the type of cuisine you're hungry for (Chinese, Pizza, etc) and your current location (City, State or zipcode) and let you know if there is someone who delivers that type of food to where you are.  DelivR is made to work on mobile or desktop devices and you can even place a call to the restaurant by clicking on the phone number link.  DelivR even provides you with a simple star rating to help you decide which restaurant will deliver the best dinner for you.
### UX
DelivR was designed with simplicity in mind.  No one wants a complicated interface when they are hungry.  Simple input fields, large easy to read buttons, and click-to-call links make DelivR easy to use.  
<br>
DelivR is designed to look great and be easy to use on desktop devices as seen below...
<img alt="DelivR Desktop Main" src="https://github.com/Kellator/delivr-react-app/blob/master/src/DelivR_SS/DelivR_desktop.png" width="400px" />
<img alt="DelivR Desktop Results Screen" src="https://github.com/Kellator/delivr-react-app/blob/master/src/DelivR_SS/DevliR_results_desktop.png" width="400px" />
<br>
DelivR was also designed with Mobile in mind.  DelivR allows users to make calls through click-to-call links in each returned result.<br>
<img alt="DelivR mobile" src="https://github.com/Kellator/delivr-react-app/blob/master/src/DelivR_SS/Delivr_Mobile.png" width="200px" />
<img alt="DelivR mobile results" src="https://github.com/Kellator/delivr-react-app/blob/master/src/DelivR_SS/DelivR_results_mobile.png" width="200px" />
<br>
Check out a live version hosted at [DelivR](https://kellator.github.io/delivr-react-app/#/)
### Technical
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and developed using the MERN stack.  The front end is built using HTML5, CSS3, and React/Redux.  The backend uses ExpressJS and the Yelp Fusion API.
DelivR is hosted on GH Pages with a proxy run through Heroku to access Yelp's Fusion API.
### Testing
