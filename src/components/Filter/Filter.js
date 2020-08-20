import React from 'react';
import classes from './Filter.module.css';

const Filter = ({filter, filterContacts}) => {
    return (
        <div className={classes.filter}>
            <label>
                Search
                <input type='text' value={filter} 
                onChange={(e) => filterContacts(e.target.value)}/>
            </label>
        </div>
    );
};

export default Filter;