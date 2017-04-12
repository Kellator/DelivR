import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../grid.css';
import '../../index.css';

// const styles = {
// 	head: {
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		flexDirection: 'column',
// 		padding: 50
// 	}
// }

const Search = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div className="Grid Grid-column ">
            <form onSubmit={handleSubmit(props.onSubmit)} className="Grid Grid-column" >
                    <div className="Grid-cell Grid-cell--center">
                        <label className="white-text Grid-cell label-flex">I'm Hungry For...</label>
                        <Field className="block rounded" name="cuisine" component="input" type="text" placeholder="Chinese" />
                    </div>
                    <div className="Grid-cell Grid-cell--center space-small">
                        <label className="white-text Grid-cell label-flex">Location</label>
                        <Field className="block rounded " name="location" required component="input" type="text" placeholder="City, State or Zipcode" />
                    </div>
                    <div className="space-small" />
                <button className="block rounded button " type="submit" disabled={pristine || submitting}>Feed Me!</button>
                {/*<button className="block rounded button flex-item" type="button" disabled={pristine || submitting} onClick={reset}>Changed my mind...</button>*/}
            </form>
        </div>
    )
}
Search = reduxForm({
    form:'search'
})(Search);

export default Search;


