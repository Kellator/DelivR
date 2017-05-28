import React from 'react';
import StarRater from './StarRater';
import '../../grid.css';
import '../../index.css';

const Result = (props) => {
        return (         
                <li className="col_4 result_card" >   
                        <div className="row card_contents">             
                                <img className="result-image " alt="food" src={props.result.image_url} />
                                <h2 className="center-text"><a className="link-color" href={props.result.url}>{props.result.name}</a></h2>
                                <h3 className="center-text"><a className="phone-link" href={`tel:${props.result.phone}`}>{props.result.display_phone}</a></h3>
                                <StarRater  rating={props.result.rating} />      
                        </div> 
                </li>          
        );
}
export default Result;