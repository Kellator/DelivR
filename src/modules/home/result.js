import React from 'react';

class Result extends React.Component {
    render() {
        console.log(this.props);
        return (
            <li>
                <div>
                        <img />
                        <h3>Name: </h3>
                        <h4>Phone: </h4>
                        <h4>Rating: </h4>
                </div>
            </li>
        )
    }

}
export default Result;