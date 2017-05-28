import React from 'react';
import SearchPage from './searchPage';   
import '../../grid.css';
import '../../index.css';


const HomeView = () => ( 
    <div className="row center_rail center_parent">
        <div className="col_12 top_child">
            <h1 className="title center-text">DelivR</h1>   
            <p className="home-text center-text">Hungry?  Nothing in the kitchen?</p>
            <p className="home-text center-text">Don't want to go out?</p>
            <p className="home-text center-text">Let DelivR find you dinner that delivers!</p> 
            <SearchPage />
        </div>
    </div>
);

export default HomeView;