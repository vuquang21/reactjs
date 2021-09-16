import React, { useState } from 'react';
import '../components/Style.css';
import Button from '../components/Button';


const Search = (props) => {
    const title = 'Search';
    return (
        <div className="search-container">
            <input class="form-control" type="text" placeholder="Where are you going?" />
            <div className="search__button search__button--border">

                <i class="fa fa-search" aria-hidden="true" />
                {/* <button type="button" class="btn btn--border">Search</button> */}
                <Button  className="Button" title = { title }/>
            </div>
        </div>
    );
}

export default Search;