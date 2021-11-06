import React from 'react';

import styled from 'styled-components';

const Input = styled.input`
    border-radius: .25em;
    margin-left:  1.5em;
    font-size: 0.75em;
    height: 1em;
    width: 50%;
`;

const Search = styled.div`
    font-size: 1.5em;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const SearchBar = ({
	searchStr,
	updateSearch
}) => {
	return (
		<Search>
			<label>Search Gifs</label>
			<Input onChange={e => updateSearch(e.target.value)} value={searchStr} />
		</Search>
	);
};

export default SearchBar;