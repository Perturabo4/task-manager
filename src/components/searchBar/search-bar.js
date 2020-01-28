import React from 'react';
import './search-bar.scss';

const SearchBar = () => {
    return (
        <form className="search-form">
            <div className="input-field">
                <input id="search" type="search" required />
                <label className="label-icon" htmlFor="search">
                    <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
            </div>
        </form>
    )
}

export default SearchBar;