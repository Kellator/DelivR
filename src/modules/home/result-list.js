import React, { PropTypes } from 'react';
import Result from './result';
import '../../grid.css';
import '../../index.css';


class ResultList extends React.Component {
    render() {
        console.log(this.props.results)
        const results = this.props.results.map((result, index) => {
            console.log(result);
            return <Result key={index} result={result} />
        });
        return(
            <div className="Grid">
                <div className="Grid-cell ">
                    {results}
                 </div>
            </div>
        );
    }
}
export default ResultList; 