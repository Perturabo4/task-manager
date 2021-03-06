import React from 'react';
import {connect} from 'react-redux';
import {filterTitle} from '../../actions';
import {NavLink} from 'react-router-dom';

import './search-bar.scss';

const submitHandler = (e) => e.preventDefault(); 

const SearchBar = ({filters, filterTitle}) => {
    return (
        <>
        <form className="search-form" onSubmit={submitHandler}>
            <div className="input-field">
                <input 
                    id="search" 
                    type="search" 
                    required 
                    onChange={(e) => filterTitle(e.target.value)}
                    value={filters.taskTitle}
                />
                <label className="label-icon" htmlFor="search">
                    <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
            </div>
        </form>
        <ul id="nav-mobile" className="right">
            <NavLink 
                to='/logout' 
                exact={true} 
            >
                Выйти
            </NavLink>
        </ul>
        
        </>
    )
}

const mapStateToProps = ({filters}) => {
    return {
        filters
    }
}

const mapDispatchToProps =  {
    filterTitle
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);