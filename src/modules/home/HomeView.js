import React from 'react';
import SearchPage from './searchPage';
import '../../grid.css';
import '../../index.css';


const HomeView = () => ( 
    <div className="search-div">
        <div className="">
            <div className="">
                <h1 className="title">DelivR</h1>   
                <p className="home-text ">Hungry?  Nothing in the kitchen?</p>
                <p className="home-text ">Don't want to go out?</p>
                <p className="home-text ">Let DelivR find you dinner that delivers!</p> 
            </div>
        </div>
        <div className="">
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