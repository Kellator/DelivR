import React from 'react';
import ResultList from './result-list';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';

class ReturnedResultList extends React.Component {
  render() {
    return (
      <ResultList results={this.props.result}/>
    );
  }
}
const mapStateToProps = (state, props) => ({
    result: state.result
})

export default connect(mapStateToProps)(ReturnedResultList);