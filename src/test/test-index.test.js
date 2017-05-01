import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import chai from 'chai';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount, render, shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
// import NoResult from '../modules/home/noResult';
// import HomeView from '../modules/home/HomeView';
// import * as actions from '../../redux/actions';
// const should = chai.should();
chai.use(chaiEnzyme());

const wrapper = mount(<App />);

// describe('(Component) App', () => {
//     it('renders the app', () => {
//         expect(wrapper).to.have.lengthOf(1);
//     });
// });


describe('App component', () => {
	it('Renders the App based on route', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<App />);
		const result = renderer.getRenderOutput();
		console.log(result);
  })
})

// describe('HomeView component', () => {
//   	it('Renders the headings and search', () => {
// 		const renderer = TestUtils.createRenderer();
// 		renderer.render(<HomeView />);
// 		const result = renderer.getRenderOutput();
// 		result.props.className.should.equal('search-div');
// 		console.log(result);

// 		const divFirst = result.props.children[0];
// 		divFirst.type.should.equal('div');
// 		divFirst.className.should.equal('col_12');

// 		const divSecond = result.props.children[1];
// 		divSecond.type.should.equal('div');
// 		divSecond.className.should.equal('col_12');
//   })
// })

// describe('NoResult component', () => {
// 	it('Renders a div containing error message and home button', () => {
// 		const renderer = TestUtils.createRenderer();
// 		renderer.render(<NoResult />);
// 		const result = renderer.getRenderOutput();
// 		console.log(result);

// 		const h2 = result.props.children[0];
// 		h2.type.should.equal('h2');

// 		const h3 = result.props.children[1];
// 		h3.type.should.equal('h3');

// 		const button = result.props.children[2];
// 		button.type.should.equal('button'); 
// 		button.props.className.should.equal('no-result-button');
// 	})
// })

// describe('ResultList Component', () => {
// 	it('Renders a list of results', () => {
// 		const results = [
// 			'business1': {
// 				'name': 'business one',
// 				'phone': '508-588-5334',
// 				'rating': '4 stars'
// 			},
// 			'business2': {
// 				'name': 'business two',
// 				'phone': '508-588-8775',
// 				'rating': '3 stars'
// 			},
// 			'business3': {
// 				'name': 'business three',
// 				'phone': '508-521-1613',
// 				'rating': '5 stars'
// 			}
// 		]
// 		const renderer = TestUtils.createRenderer();
// 		renderer.render(<ResultList results={results} />);
// 		const result = renderer.getRenderOutput();
// 		console.log(result);
// 	})
// })