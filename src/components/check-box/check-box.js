import React from 'react'

const CheckBox = ({onChange}) => {
    return (
            <label>
                <input 
                    type="checkbox" 
                    className="filled-in" 
                    checked="checked" 
                    onChange={() => { onChange() }}
                    />
                    <span></span>
            </label>
            );
}

export default CheckBox;