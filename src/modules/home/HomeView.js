import React from 'react';
import SearchPage from './searchPage';
import '../../index.css';

const HomeView = () => ( 
    <div className="flex-item">
        <div className="container spacer">
            <h1 className="flex-item "> DelivR < /h1>   
            <p className="flex-item "> Hungry?  Nothing in the kitchen?  Don't want to go out? < /p>
            <p className="flex-item ">Let DelivR find you dinner that delivers!</p> 
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