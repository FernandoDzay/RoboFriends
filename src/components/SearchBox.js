import React from 'react'

const SearchBox = ({searchChange}) => {
	return (<input 
		type="search" 
		placeholder="search robots"
		onChange={searchChange}
		className="pa3 ba b--green bg-lightest-blue"
	/>);
}

export default SearchBox;