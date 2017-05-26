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
import { shallow, mount, render } from 'enzyme';

describe('a suite', () => {
	it('contains spec with an expectation', () => {
		expect(true).toBe(true);
	});
});

describe('<HomeView />', () => {
	it('should render', () => {
		expect(shallow(<HomeView />).is('.col_12')).toBe(true);
	});
	it('should contain 3 <div>', () => {
		expect(shallow(<HomeView />).find('.col_12').length).toBe(3);
	});
	it('should contain 3 <p>', () => {
		expect(shallow(<HomeView />).find('.home-text').length).toBe(3);
	});
	it('should contain 1 <h1>', () => {
		expect(shallow(<HomeView />).find('.title').length).toBe(1);
	})
});

describe('<Result />', () => {
	it('should render a list item with className result_item', () => {
		const wrapper = shallow(<Result image_url="image" />);
		expect(wrapper.instance().props).to.equal("image");
	});
	it('should contain <h2/>', () => {
		expect(shallow(<Result />).find('.center-text').length).toBe(1);
	});
});
describe('<ResultList />', () => {

});

describe('<Search />', () => {

});

describe('<SearchPage />', () => {

});

describe('<ReturnedResultList />', () => {

});

describe('<About />', () => {

})

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

