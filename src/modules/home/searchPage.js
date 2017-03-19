import React from 'react';
import Search from './search';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';

class SearchPage extends React.Component {
  handleSubmit = (values, actions) => {
    console.log(values.cuisine, values.location);
    console.log(actions);
    // this.props.dispatch(action.chooseCuisine(values.cuisine));
  }
  render() {
    return (
      <Search onSubmit={this.handleSubmit} />
    );
  }
}
const mapStateToProps = (state, props) => ({
	search: {
		cuisineSearch: state.cuisineSearch,
		locationSearch: state.locationSearch
	}
})
export default connect(mapStateToProps)(SearchPage);