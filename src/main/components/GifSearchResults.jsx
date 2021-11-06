import React from 'react';
import styled from 'styled-components';
import DraggableGif from './DraggableGif';

const SearchResult = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
    grid-gap: 1em;
    justify-content: center;
    align-items: center;
`;

const DragText = styled.p`
    font-size: 1em;
`;

const GifSearchResult = ({
	gifs,
	addToCollection
}) => {

	// Displays a loading message until the gifs are loaded
	if (!gifs) {
		return (
			<DragText>Loading</DragText>
		);
	}

	// Displays an appropriate error message if no gifs were fetched
	if (gifs.length === 0) {
		return (
			<DragText>Error while fetching gifs ... please reload the page</DragText>
		);
	}

	return (
		<div>
			<DragText> Drag your gifs into the drop zone to save them for later </DragText>
			<SearchResult>
				{gifs.map((gif) =>
					<DraggableGif gifObject={gif} key={gif.id} addToCollection={addToCollection}/>
				)}
			</SearchResult>
		</div>
	);
};

export default GifSearchResult;