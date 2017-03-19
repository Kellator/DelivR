import React from 'react';
import Search from './search';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';

class SearchPage extends React.Component {
  handleSubmit = (values, dispatch, props) => {
    console.log(values.cuisine, values.location);
    let cuisine = values.cuisine;
    let location = values.location;
    dispatch(actions.chooseCuisine(cuisine));
    dispatch(actions.chooseLocation(location));
  }
  render() {
    return (
      <Search onSubmit={this.handleSubmit}/>
    );
  }
}
const mapStateToProps = (state, props) => ({
    cuisine: state.cuisineSearch,
    location: state.locationSearch
})
const mapDispatchToProps = (dispatch, ownProps) => {
  // return {
  //   cuisineSubmit: (values.cuisine) => {
  //     dispatch(chooseCuisine(values.cuisine));
  //   }
  // }
  console.log(ownProps);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);