import React from 'react';

import { useDrag } from 'react-dnd';

import styled from 'styled-components';
import { DndTypes } from '../utils/gifUtils';

// make the gif a bit transparent while dragging it around
const StyledGif = styled.div`
  display: inline-block;
  opacity: ${props => props.isDragging ? 0.5 : 1}
`;

const Gif = styled.img`
  height: 10em;
  width: 10em;
`;

const DraggableGif = ({
	gifObject,
	addToCollection
}) => {

	if (gifObject) {
		const [{ isDragging }, drag] = useDrag({
			item: { name: gifObject.slug, type: DndTypes.RESULT},
			end: (item, monitor) => {
				const dropResult = monitor.getDropResult();
				if (item && dropResult) {
					addToCollection(gifObject);
				}
			},
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		});
	
		return (
			gifObject && <StyledGif isDragging={isDragging}>
				<div ref={drag} key={gifObject.id}>
					<Gif src={gifObject.images.preview_gif.url} alt={gifObject.userName + gifObject.id} />
				</div>
			</StyledGif>
		);
	}

	return <div></div>;
	
};

export default DraggableGif;