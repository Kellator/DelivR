import React from 'react';
import StarRater from './StarRater';
import '../../index.css';

const Result = (props) => {
        console.log(props);
        return (
            <div className="result-item">
                <li>
                    <img className="result-image" src={props.result.image_url} />
                    <h2><a href={props.result.url}>Name: {props.result.name}</a></h2>
                    <h3>Phone: {props.result.display_phone}</h3>
                    <h3>Rating: </h3><StarRater rating={props.result.rating} />
                </li>
            </div>
        );
}
export default Result;