import React from 'react';
import Result from './result';

import '../../grid.css';
import '../../index.css';


class ResultList extends React.Component {
    render() {
        console.log(this.props.results);
        const results = (this.props.results) ? this.props.results.map((result, index) => { 
            console.log(result);
            return <Result key={index} result={result} />
        }) : undefined;
        return(
            <div className="center">
                <div className="center">
                    {results}
                 </div>
            </div>
        );
    }
}
export default ResultList; 