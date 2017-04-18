import React from 'react';
import StarRater from './StarRater';
import '../../grid.css';
import '../../index.css';

const Result = (props) => {
        console.log(props);
        return (         
                <li className="rounded result-item ">                   
                        <img className=" result-image " src={props.result.image_url} />
                        <h2 className=""><a className="link-color" href={props.result.url}>{props.result.name}</a></h2>
                        <h3 className=""><a className="phone-link" href="tel:{props.result.display_phone}">{props.result.display_phone}</a></h3>
                        <StarRater  rating={props.result.rating} />                    
                </li>           
        );
}
export default Result;