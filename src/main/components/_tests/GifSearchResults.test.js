import React from 'react';
import { shallow } from 'enzyme';

import  GifSearchResult from '../GifSearchResults';
const mockGiphyApiResponse = require('../../../__tests__/mockGiphyApiResponse.json');

describe('gif search results tests', () => {

	const defaultProps = {
		gifs: [],
		addToCollection: jest.fn(), 
	};

	it('renders a loading message when no data is passed', () => {
		const props = {
			...defaultProps,
			gifs: null
		};
		const component = shallow(<GifSearchResult {...props}/>);
		expect(component.text()).toBe('Loading');
	});

	it('renders an error message when an empty array is passed', () => {
		const component = shallow(<GifSearchResult {...defaultProps} />);
		expect(component.text()).toBe('Error while fetching gifs ... please reload the page');
	});

	it('renders a search result component when data is passed', () => {
		const props = {
			...defaultProps,
			gifs: mockGiphyApiResponse.data,
		};
		const component = shallow(<GifSearchResult {...props} />);
		expect(component.childAt(0).text()).toBe(' Drag your gifs into the drop zone to save them for later ');
		expect(component.childAt(1).children().length).toBe(5);
	});

});