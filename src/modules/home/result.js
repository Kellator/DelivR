import React from 'react';
import StarRater from './StarRater';
import '../../grid.css';
import '../../index.css';

const Result = (props) => {
        console.log(props);
        return (
            <div className="Grid-cell Grid-cell--center">
                <div className=" ">
                    <li className=" result-item rounded ">                   
                        <img className=" result-image " src={props.result.image_url} />
                        <h2 className="result-text "><a className="link-color" href={props.result.url}>{props.result.name}</a></h2>
                        <h3 className="result-text">{props.result.display_phone}</h3>
                        <StarRater  rating={props.result.rating} />                    
                    </li>
                </div>
            </div>
        );
}
export default Result;