import React from 'react';
import {Select as SelectList} from 'react-materialize';

import './select.scss';

const Select = ({opt = {}, cls = [], label, value}) => {
    cls = cls.join(' ');
    return (
        <SelectList
            onChange={function noRefCheck(){}}
            options={{
                classes: cls,
            }}
            label={label}
            value={value}
        >
            {
                Object.keys(opt).map( (item, ind) => {
                    return (
                        <option value={item} key={ind}>
                            { opt[item] }
                        </option>
                    )
                })
            }
        </SelectList>
    );
}

export default Select;