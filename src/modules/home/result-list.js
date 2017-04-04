import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';

export class ResultList extends React.Component {

}

const mapStateToProps = (state, props) => {
    cuisine: state.cuisineSearch,
    location: state.locationSearch,
    result: state.result.businesses
}