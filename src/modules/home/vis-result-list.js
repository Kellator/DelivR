import React from 'react';
import ResultList from './result-list';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';

class ReturnedResultList extends React.Component {
  render() {
      console.log(this.props.result);
    return (
      <ResultList results={this.props.result}/>
    );
  }
}
const mapStateToProps = (state, props) => ({
    result: state.result.businesses
})

export default connect(mapStateToProps)(ReturnedResultList);