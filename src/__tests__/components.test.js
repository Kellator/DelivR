import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import StarRater from '../modules/home/StarRater';
import NoResult from '../modules/home/noResult';
import Result from '../modules/home/result';
import HomeView from '../modules/home/HomeView';
import SearchPage from '../modules/home/SearchPage';
import ReturnedResultList from '../modules/home/vis-result-list';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

test('NoResult component render without throwing error', () => {
  expect(renderer.create(
    <MemoryRouter>
      	<NoResult/>
    </MemoryRouter>
  ).toJSON()).toMatchSnapshot();
});

test('StarRater component render without throwing error', () => {
	const component = renderer.create(
		<StarRater />
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

// test('Result component renders without throwing error', () => {
// 	expect(renderer.create(
// 		<Result />
// 	).toJSON()).toMatchSnapshot();
// });

test('HomeView component renders without throwing error', () => {
	expect(renderer.create(
		<MemoryRouter>
			<HomeView props={store} />
		</MemoryRouter>
	).toJSON()).toMatchSnapshot();
});

// test('ReturnedResultList component renders without throwing error', () => {
// 	const component = renderer.create(
// 		<ReturnedResultList />
// 	);
// 	let tree = component.toJSON();
// 	expect(tree).toMatchSnapshot();
// })