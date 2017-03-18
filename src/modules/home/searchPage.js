import React from 'react';
import Search from './search';

class SearchPage extends React.Component {
  handleSubmit = (values) => {
    // Do something with the form values
    console.log(values);
  }
  render() {
    return (
      <Search onSubmit={this.handleSubmit} />
    );
  }
}
export default SearchPage;