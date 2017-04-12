import React from 'react';
import StarRater from './StarRater';
import '../../grid.css';
import '../../index.css';

const Result = (props) => {
        console.log(props);
        return (
            <div className="spacer Grid-cell Grid-cell--center Grid--gutters Grid--1of3">
                <li className=" result-item rounded Grid-cell Grid-cell--center Grid--gutters">                   
                    <img className=" result-image" src={props.result.image_url} />
                    <h2 className=""><a className="link-color" href={props.result.url}>{props.result.name}</a></h2>
                    <h3 className="">{props.result.display_phone}</h3>
                    <StarRater  rating={props.result.rating} />                    
                </li>
            </div>
        );
}
export default Result;