import React from 'react';
import Result from './result';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';

class ResultList extends React.Component {
    render() {
        return (
            <div className="results-list">
                <p>Results List</p>
                <Result cuisine={this.props.cuisine} location={this.props.location} />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    cuisine: state.cuisineSearch,
    location: state.locationSearch,
    result: state.result.businesses
});

export default connect(mapStateToProps)(ResultList);