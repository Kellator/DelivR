import React, { PropTypes } from 'react';
import Result from './result';

class ResultList extends React.Component {
    render() {
        console.log(this.props.results)
        const results = this.props.results.map((result, index) => {
            console.log(result);
            return <Result key={index} result={result} />
        });
        return(
            <div className="results-list">
                {results}
            </div>
        );
    }
}
export default ResultList; 