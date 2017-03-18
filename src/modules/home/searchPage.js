import React from 'react';
import Search from './search';
import {connect} from 'react-redux';

class SearchPage extends React.Component {
  handleSubmit = (values) => {
    console.log(values);
  }
  render() {
    return (
      <Search onSubmit={this.handleSubmit} />
    );
  }
}
const mapStateToProps = (state, props) => ({
	search: {
		cuisineSearch: props.cuisineSearch,
		locationSearch: props.locationSearch
	}
})
export default connect(mapStateToProps)(SearchPage);