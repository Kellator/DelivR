import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import ReactDOM from 'react-dom';
import App from './App';


const should = chai.should();

import * as actions from '../../redux/actions';
 
import HomeView from '../../modules/home/HomeView';

describe('App component', () => {
	it('Renders the App based on route', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<App />);
		const result = renderer.getRenderOutput();
    console.log(result);
  })
})

// describe('HomeView component', function() {
//   it('Renders the headings and search', function() {
//     const renderer = TestUtils.createRenderer();
//     renderer.render(<HomeView />);
//     const result = renderer.getRenderOutput();
//     result.props.className.should.equal('search-div');
//     console.log(result);
//   })
// })