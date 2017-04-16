import React from 'react';
import SearchPage from './searchPage';
import '../../grid.css';
import '../../index.css';


const HomeView = () => ( 
    <div className="Grid Grid-column search-div">
        <div className="Grid-cell">
            <div className="Grid Grid-column ">
                <h1 className="title Grid-cell Grid-cell--center title"> DelivR </h1>   
                <p className=" home-text Grid-cell Grid-cell--center"> Hungry?  Nothing in the kitchen?  Don't want to go out? </p>
                <p className="home-text Grid-cell Grid-cell--center ">Let DelivR find you dinner that delivers!</p> 
            </div>
        </div>
        <div className="Grid-cell">
            <SearchPage />
        </div>
    </div>
);
{/*const mapStateToProps = (state, props) => ({
	search: {
		cuisineSearch: props.cuisineSearch,
		locationSearch: props.locationSearch
	}
});*/}
export default HomeView;