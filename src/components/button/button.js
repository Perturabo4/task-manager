import React from 'react';

const Button = ({color='red', text='button', onClick}) => {
    return (
        <button 
            onClick={() => onClick()}
            className={`btn waves-effect waves-light ${color}`} 
            name="action">
                {text}
        </button>
    )
}
export default Button;