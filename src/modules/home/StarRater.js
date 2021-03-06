import React from 'react';
import '../../grid.css';
import '../../index.css';

function StarRater(props) {
    const stars = [];
    for (let i=0; i<5; i++) {
        let className;
        if (i < props.rating) {
            className = 'fa fa-star';
        }
        else {
            className = 'fa fa-star-o';
        }
        const star = (
            <i className={className} key={i}></i>
        );
        stars.push(star);
    }

    return (
        <div className="result_star">
            <span className="center-text gray">
                {stars}
            </span>
        </div>
    );
}
StarRater.defaultProps = {
    rating: 0
};

export default StarRater;