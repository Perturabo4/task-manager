import React from 'react';

import './button.scss';

const Button = ({cls=['red'], text='button', onClick= () => false}) => {
    const classes = cls.join(' ');
    return (
        <button 
            onClick={(e) => {
                e.stopPropagation();
                onClick(e);
            }}
            className={`btn waves-effect waves-light ${classes}`} 
            name="action">
            {text}
        </button>
    )
}
export default Button;