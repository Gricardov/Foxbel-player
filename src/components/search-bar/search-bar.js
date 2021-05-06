import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './search-bar.css';

export const SearchBar = ({ search }) => {
    
    return (
        <div className='search-bar'>
            <input placeholder='Search' />
            <FontAwesomeIcon icon={faSearch} />
        </div>
    )


}

export default SearchBar;