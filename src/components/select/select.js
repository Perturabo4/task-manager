import React from 'react';
import {Select as SelectList} from 'react-materialize';

import './select.scss';

const Select = ({opt = {}, cls = [], label, value, onChange}) => {
    cls = cls.join(' ');
    return (
        <SelectList
            onChange={(e) => onChange(e)}
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