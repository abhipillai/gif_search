/* eslint-disable no-unused-vars */
import React from 'react';

import { useDrop } from 'react-dnd';

import styled from 'styled-components';
import { DarkGray, rhythm } from '../../lib';
import { DndTypes } from '../utils/gifUtils.js';

const StyledDropzone = styled.section`
  border: 1px solid ${DarkGray};
  min-height: ${rhythm(10)}px;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClearButton = styled.button`
  border-radius: 0.25em;
  margin-top: 1em;
`;

// upon hover the remove button will be visible
// this will help the user remove the gif from the drop zone if they need to
const GifObject = styled.div`
  position: relative;
  &:hover {
    border: 2px solid blue;
  }
  &:hover button {
    display: block;
    position: absolute;
    z-index: 50;
  }
  &:hover img {
    opacity: 0.5;
  }
  height: 20em;
  width: 20em;
  margin: 1em;
`;

const GifImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Remove = styled.button`
  display: none;
  border-radius: 0.25em;
  top: 0;
  right: 0;
`;

const Dropzone = ({
	collections,
	clearDropZone,
	removeFromDropZone
}) => {
	const [{ canDrop, isOver }, drop] = useDrop({
		accept: DndTypes.RESULT,
		drop: (item, monitor) => {
			return { name: 'Dropzone Area' };
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	});

	const remove = (e => {
		removeFromDropZone(e.target.id);
	});

	const isCollectionsEmpty = !collections || collections.length === 0;
  
	return (
		<div ref={drop} >
			<StyledDropzone>
				{!isCollectionsEmpty &&
            collections.map(collection => 
            	<GifObject key={collection.id}>
            		<GifImage src={collection.images.original.url} alt={collection.username} />
            		<Remove id={collection.id} onClick={remove}>Remove</Remove>
            	</GifObject>
            )
				}
			</StyledDropzone>
			<ClearButton onClick={clearDropZone} isCollectionsEmpty={isCollectionsEmpty} disabled={isCollectionsEmpty}>Clear Drop Zone</ClearButton>
		</div>
	);
};

export default Dropzone;