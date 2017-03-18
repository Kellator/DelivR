import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';

const Search = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit} className="search-form">
            <div >
                <label>I'm Hungry For...</label>
                <Field name="cuisine" component="input" type="text" placeholder="Chinese" />
            </div>
            <div>
                <label>Location</label>
                <Field name="location" component="input" type="text" placeholder="City, State or Zipcode" />
            </div>
            <button type="submit" disabled={pristine || submitting}>Feed Me!</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Changed my mind...</button>
        </form>
    )
}
Search = reduxForm({
    form:'search'
})(Search);

export default Search;


