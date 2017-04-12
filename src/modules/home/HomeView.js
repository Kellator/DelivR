import React from 'react';
import SearchPage from './searchPage';
import '../../grid.css';
import '../../index.css';


const HomeView = () => ( 
    <div className="Grid Grid-column ">
        {/*<div id="HomeView-container" className="Grid-cell">*/}
            <div className="Grid Grid-column ">
                <h1 className="title Grid-cell Grid-cell--center"> DelivR </h1>   
                <p className=" white-text Grid-cell Grid-cell--center"> Hungry?  Nothing in the kitchen?  Don't want to go out? </p>
                <p className="white-text Grid-cell Grid-cell--center ">Let DelivR find you dinner that delivers!</p> 
            </div>
            <SearchPage />
        {/*</div>*/}
    </div>
);
{/*const mapStateToProps = (state, props) => ({
	search: {
		cuisineSearch: props.cuisineSearch,
		locationSearch: props.locationSearch
	}
});*/}
export default HomeView;