import React from 'react';
import ResultList from './result-list';
import NoResult from './noResult';
import { NavBar } from '../layout/NavBar';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../index.css';

class ReturnedResultList extends React.Component {
  render() {
    let resultArray = this.props.result;
    if (resultArray.length === 0) {
      return  <NoResult />
    }
    return <ResultList results={this.props.result}/>
  }
}
const mapStateToProps = (state, props) => ({
    result: state.result.businesses
})

export default connect(mapStateToProps)(ReturnedResultList);