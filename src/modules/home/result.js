import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';

const Result = (props) => {
    return (
        <h1>Looking for {props.cuisine} in {props.location}. </h1>
    )
}
export default Result;