import React from 'react';
import StarRater from './StarRater';
import '../../index.css';

const Result = (props) => {
        console.log(props);
        return (
            <div className="flex-item result-item rounded spacer">
                <li className="container">                   
                    <img className="result-image rounded flex-item" src={props.result.image_url} />
                    <h2 className="flex-item"><a href={props.result.url}>{props.result.name}</a></h2>
                    <h3 className="flex-item">{props.result.display_phone}</h3>
                    <StarRater  rating={props.result.rating} />                    
                </li>
            </div>
        );
}
export default Result;