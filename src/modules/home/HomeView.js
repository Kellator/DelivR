import React from 'react';
import SearchPage from './searchPage';
import '../../index.css';

const HomeView = () => ( 
    <div className="container">
        <div className="container space-small">
            <h1 className="flex-item title"> DelivR < /h1>   
            <p className="center white-text"> Hungry?  Nothing in the kitchen?  Don't want to go out? < /p>
            <p className="center white-text">Let DelivR find you dinner that delivers!</p> 
        </div>
        <SearchPage />
    </div>
);
const mapStateToProps = (state, props) => ({
	search: {
		cuisineSearch: props.cuisineSearch,
		locationSearch: props.locationSearch
	}
});
export default HomeView;