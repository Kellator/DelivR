import React, { PropTypes } from 'react';
import Result from './result';

class ResultList extends React.Component {

    render() {
        console.log(this.props.results)
        const results = this.props.results;
        return(
            <div className="results-list">
                <Result result={results} />
            </div>
        );
    }
}
export default ResultList; 