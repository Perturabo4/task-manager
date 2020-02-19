import React from 'react';
import './input.scss';

const CheckType = ({id, type, cls=[], onChange, value, err}) => {

    const classes = [...cls, err ? 'err': ''].join(' ');

    switch (type) {
            
        case 'textarea':
            return (
                <textarea 
                    id={id} 
                    className={`materialize-textarea ${classes}`}
                    onChange={onChange}
                    value={value}
                >
                </textarea> 
            );
        default :
            return (
                <input 
                    id={id} 
                    type="text" 
                    className={`validate ${classes}`}
                    onChange={onChange}
                    value={value} 
                />
            );
    }
}

const Input = (props) => {

return (
    <div className="input-field">
        <CheckType 
            {...props}
        />
        <label 
            htmlFor={props.id} 
            className={props.value && 'active'}
        >
            {props.label}
        </label>
    </div>
    );
}

export default Input;