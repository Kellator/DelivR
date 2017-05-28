import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../grid.css';
import '../../index.css';

let Search = (props) => {
    const { handleSubmit, pristine, submitting } = props
    return (
        <div className="col_12 search-container">
            <form onSubmit={handleSubmit(props.onSubmit)} className="" >
                <div className="">
                    <label className="home-text block">I'm Hungry For...</label>
                    <Field className="block rounded" name="cuisine" component="input" type="text" placeholder="Chinese" />
                </div>
                <div className="">
                    <label className="home-text block">Location</label>
                    <Field className="block rounded " name="location" required component="input" type="text" placeholder="City, State or Zipcode" />
                </div>
                <div>
                    <button className="block rounded button " type="submit" disabled={pristine || submitting}>Feed Me!</button>
                </div>
            </form>
        </div>
    )
}
Search = reduxForm({
    form:'search'
})(Search);

export default Search;


