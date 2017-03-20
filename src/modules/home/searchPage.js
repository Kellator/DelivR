import React from 'react';
import Search from './search';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import { reset } from 'redux-form';

// container component to connect to redux, dispatch actions, and define handleSubmit 

class SearchPage extends React.Component {
  handleSubmit = (values, dispatch, props) => {
    console.log(values.cuisine, values.location);
    let cuisine = values.cuisine;
    let location = values.location;
    dispatch(actions.chooseCuisine(cuisine));
    dispatch(actions.chooseLocation(location));
    dispatch(actions.itemsFetchData(cuisine, location));
  }
  pickles = (dispatch, props) => {

  }
  render() {
    return (
      <Search onSubmit={this.handleSubmit} pickles={this.pickles}/>
    );
  }
}
const mapStateToProps = (state, props) => ({
    cuisine: state.cuisineSearch,
    location: state.locationSearch
})

export default connect(mapStateToProps)(SearchPage);