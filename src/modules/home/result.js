import React from 'react';

const Result = (props) => {
        console.log(props);
        return (
            <div className="result-item">
                <li>
                    <p>Name: {props.result.name}</p>
                    <p>Phone: {props.result.display_phone}</p>
                    <p>hello can you see me?</p>
                </li>
            </div>
        );
}
export default Result;