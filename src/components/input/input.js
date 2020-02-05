import React from 'react';

const CheckType = ({id, type, cls=[], onChange}) => {
    const classes = cls.join(' ');
    switch (type) {
            
        case 'textarea':
            return (
                <textarea 
                    id={id} 
                    className={`materialize-textarea ${classes}`}
                    onChange={onChange}>
                </textarea> 
            );
        default :
            return (
                <input 
                    id={id} 
                    type="text" 
                    className={`validate ${classes}`}
                    onChange={onChange} 
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