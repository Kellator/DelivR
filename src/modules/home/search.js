import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Form } from 'semantic-ui-react';

const Search = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <Grid centered >
            <Grid.Column width={6}>
                <Form>
                <form onSubmit={handleSubmit} className="search-form">
                    <Form.Field>
                        <div >
                            <label>I'm Hungry For...</label>
                            <Field name="cuisine" component="input" type="text" placeholder="Chinese" />
                        </div>
                    </Form.Field>
                    <Form.Field>
                        <div>
                            <label>Location</label>
                            <Field name="location" required component="input" type="text" placeholder="City, State or Zipcode" />
                        </div>
                    </Form.Field>
                    <button type="submit" disabled={pristine || submitting}>Feed Me!</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Changed my mind...</button>
                </form>
                </Form>
            </Grid.Column>
        </Grid>
    )
}
Search = reduxForm({
    form:'search'
})(Search);

export default Search;


