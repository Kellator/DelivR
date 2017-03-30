import React from 'react';
import Search from './search';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import { reset } from 'redux-form';

// container component to connect to redux, dispatch actions, and define handleSubmit 

class SearchPage extends React.Component {
  handleSubmit = (values) => {
    console.log(values.cuisine, values.location);
    let cuisine = values.cuisine;
    let location = values.location;
    this.props.chooseCuisine(cuisine);
    this.props.chooseLocation(location);
    this.props.asyncRequest(cuisine, location);
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

export default connect(mapStateToProps, { chooseCuisine: actions.chooseCuisine, chooseLocation: actions.chooseCuisine, asyncRequest: actions.asyncRequest })(SearchPage);