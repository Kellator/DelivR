import React from 'react';
import {Button, Form, Grid} from 'semantic-ui-react';
import {Field, reduxForm } from 'redux-form';
// search component - cuisineSearch and locationSearch input fields

const Search = () => (
    <Grid centered>
        <Grid.Column width={6}>
            <Form>
                <Form.Field>
                    <label>I'm Hungry For...</label>
                    <input type="text" placeholder="Chinese"/>
                </Form.Field>
                <Form.Field>
                    <label>Location</label>
                    <input type="text" placeholder="City, State or Zipcode"/>
                </Form.Field>
                <Form.Button type="submit">Feed Me!</Form.Button>
            </Form>
        </Grid.Column>
    </Grid>
);
Search = reduxForm({
    form:'search'
})(Search);
export default Search;