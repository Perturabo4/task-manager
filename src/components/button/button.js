import React from 'react';

const Button = ({color='red', text='button'}) => {
    return (
        <button 
            className={`btn waves-effect waves-light ${color}`} 
            name="action">
                {text}
        </button>
    )
}
export default Button;