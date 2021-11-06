import React from 'react';
import { shallow } from 'enzyme';

import DraggableGif from '../DraggableGif';

describe('Draggable Gifs test', () => {
	const defaultProps = {
		gifObject:  null,
		addToCollection: jest.fn()
	};

	it('does not return any data if the props are empty', () => {
		const component = shallow(<DraggableGif {...defaultProps} />);
		expect(component.text()).toBe('');
	});
});