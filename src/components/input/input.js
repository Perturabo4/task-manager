import React from 'react';

const CheckType = ({id, type, cls=[], onChange, value}) => {
    const classes = cls.join(' ');
    switch (type) {
            
        case 'textarea':
            return (
                <textarea 
                    id={id} 
                    className={`materialize-textarea ${classes}`}
                    onChange={onChange}
                    value={value}>
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
        <label htmlFor={props.id}>{props.label}</label>
    </div>
    );
}

export default Input;