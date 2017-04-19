import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../grid.css';
// import '../../index.css';

const Search = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div className="">
            <form onSubmit={handleSubmit(props.onSubmit)} className="search-width" >
                <div className="">
                    <label className="home-text block">I'm Hungry For...</label>
                    <Field className="block rounded" name="cuisine" component="input" type="text" placeholder="  Chinese" />
                </div>
                <div className="">
                    <label className="home-text block">Location</label>
                    <Field className="block rounded " name="location" required component="input" type="text" placeholder="  City, State or Zipcode" />
                </div>
                <div className="">
                    <button className="block rounded button " type="submit" disabled={pristine || submitting}>Feed Me!</button>
                </div>
                {/*<button className="block rounded button flex-item" type="button" disabled={pristine || submitting} onClick={reset}>Changed my mind...</button>*/}
            </form>
        </div>
    )
}
Search = reduxForm({
    form:'search'
})(Search);

export default Search;


