import React from 'react';
import ResultList from './result-list';
import {connect} from 'react-redux';
import '../../index.css';

class ReturnedResultList extends React.Component {
  render() {
    return (
      <ResultList results={this.props.result}/>
    );
  }
}
const mapStateToProps = (state, props) => ({
    result: state.result.businesses
})

export default connect(mapStateToProps)(ReturnedResultList);