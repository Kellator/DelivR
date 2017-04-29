import React from 'react';
import Result from './result';
import NoResult from './noResult';
import '../../grid.css';
import '../../index.css';


class ResultList extends React.Component {
    render() {
        console.log(this.props.results);
        const results = (this.props.results) ? this.props.results.map((result, index) => { 
            console.log(result);
            return <Result key={index} result={result} />
        }) : undefined;
        console.log(this.props.results);
        if ((this.props.results) === []) {
            console.log(results);
            return (
            <div className="center">
                <div className="center">
                    <NoResult />;
                </div>
            </div>
            )
        }
        else {
            return(
                <div className="center">
                    <div className="center">
                        {results}
                    </div>
                </div>
            );
        }
    }
}
export default ResultList; 