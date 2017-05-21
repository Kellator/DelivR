import React from 'react';
import StarRater from '../modules/home/StarRater';
import NoResult from '../modules/home/noResult';
import Result from '../modules/home/result';
import HomeView from '../modules/home/HomeView';
import SearchPage from '../modules/home/SearchPage';
import ReturnedResultList from '../modules/home/vis-result-list';
import renderer from 'react-test-renderer';
import { NavLink } from 'react-router-dom';

test('StarRater component render without throwing error', () => {
	const component = renderer.create(
		<StarRater />
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
})

test('NoResult component renders without throwing error', () => {
	const component = renderer.create(
		<NoResult />
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
})

test('Result component renders without throwing error', () => {
	const component = renderer.create(
		<Result img="image"/>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
})

test('HomeView component renders without throwing error', () => {
	const component = renderer.create(
		<HomeView />
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
})

test('ReturnedResultList component renders without throwing error', () => {
	const component = renderer.create(
		<ReturnedResultList />
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
})