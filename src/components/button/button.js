import React from 'react';

const Button = ({color='red', text='button', tasksEdit}) => {
    return (
        <button 
            onClick={() => tasksEdit(true)}
            className={`btn waves-effect waves-light ${color}`} 
            name="action">
                {text}
        </button>
    )
}
export default Button;