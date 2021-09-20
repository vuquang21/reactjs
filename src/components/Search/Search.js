import React, { useState } from 'react';
import '../Search/index.css';
import Button from '../Button';


const Search = (props) => {
    const title = 'Search';
    
    return (
        <div className="search-container">
            <input class="form-control" type="text" placeholder="Where are you going?" />
            <div className="search__button search__button--border">

                <i class="fa fa-search" aria-hidden="true" />
                <Button  className="Button" title = { title }/>
            </div>
        </div>
    );
}

export default Search;