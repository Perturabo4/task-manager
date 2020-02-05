import React from 'react';

const Button = ({cls=['red'], text='button', onClick}) => {
    const classes = cls.join(' ');
    return (
        <button 
            onClick={() => onClick()}
            className={`btn waves-effect waves-light ${classes}`} 
            name="action">
                {text}
        </button>
    )
}
export default Button;