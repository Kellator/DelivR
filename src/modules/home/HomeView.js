import React from 'react';
import SearchPage from './searchPage';   
import '../../grid.css';
import '../../index.css';


const HomeView = () => ( 
    <div className="row center_rail center_parent">
        <div className="col_12 top_child">
            <h1 className="title center-text">DelivR</h1>   
            <h2 className="center-text">Hungry?  Nothing in the kitchen?</h2>
            <h2 className="center-text">Don't want to go out?</h2>
            <h2 className="center-text">Let DelivR find you dinner that delivers!</h2> 
            <SearchPage />
        </div>
    </div>
);

export default HomeView;