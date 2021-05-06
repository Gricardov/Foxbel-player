import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDebouncedCallback } from 'use-debounce';

import './search-bar.css';

export const SearchBar = ({ search }) => {

    const debounced = useDebouncedCallback(
        (e) => {
            search(e.target.value);
        },
        1000
    );

    return (
        <div className='search-bar'>
            <input defaultValue='' placeholder='Search' onChange={debounced} />
            <FontAwesomeIcon icon={faSearch} />
        </div>
    )


}

export default SearchBar;