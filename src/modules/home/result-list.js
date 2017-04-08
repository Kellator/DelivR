import React, { PropTypes } from 'react';
import Result from './result';

class ResultList extends React.Component {

    render() {
            console.log(this.props)
        return(
            <ul>
                <Result /> 
            </ul>
        )
    }
}
export default ResultList;