import _ from 'lodash';
import React, {useState, useEffect, useCallback} from 'react';

import styled from 'styled-components';
import { column, gutter, rhythm } from '../lib';
import Dropzone from './components/Dropzone';
import GifSearchResult from './components/GifSearchResults';
import SearchBar from './components/SearchBar';
import gf from './utils/gifUtils.js';


const Page = styled.div`
  padding: ${rhythm(2)}px ${column + gutter}px ${rhythm(3)}px
    ${column - gutter}px;
  @media (max-width: 768px) {
    padding: ${rhythm(1)}px ${gutter}px;
  }
`;

const SearchGif = () => {

	const [searchStr, setSearchStr] = useState('');
	const [gifs, setGifs] = useState();

	const [collections, setCollections] = useState([]);

	// Fetch the gifs when the component is mounted
	useEffect(() => {
		fetchTrending
			.then(res => setGifs(res.data));
	}, []);
    
	useEffect(() => {
		searchGiphy(searchStr);
	}, [searchStr]);
    
	// using the callback hook so that the debounce function is not created again when the search string changes
	// a debounce of 300 ms will ensure that the giphy search will not start until the user stops writing
	const searchGiphy = useCallback(
		_.debounce(searchStr => {
			if (searchStr.length === 0) {
				fetchTrending
					.then(res => setGifs(res.data));
			} else {
				fetchWithKeyword(searchStr)
					.then(res => setGifs(res.data));
			}
		}, 300),
		[]
	);

	const fetchTrending = () => gf.trending({ limit: 5 });

	const fetchWithKeyword = (searchStr) => gf.search(searchStr, { limit: 5 });

	const addToCollection = (gif) => {
		if (!collections.find(collection => collection.id === gif.id)) {
			setCollections([
				...collections,
				gif
			]); 
		}
	};

	const clearDropZone = () => {
		setCollections([]);
	};

	const removeFromDropZone = (id) => {
		let remainingGifs = collections.filter(c => c.id !== id);
		setCollections(remainingGifs);
	};
    
	return (
		<Page>
			<SearchBar searchStr={searchStr} updateSearch={setSearchStr} />
			<GifSearchResult className='gifSearchResult' gifs={gifs} addToCollection={addToCollection}/>
			<Dropzone collections={collections} clearDropZone={clearDropZone} removeFromDropZone={removeFromDropZone} />
		</Page>
	);
};

export default SearchGif;