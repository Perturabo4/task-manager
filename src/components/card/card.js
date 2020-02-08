import React from 'react';

import CheckBox from '../check-box';
import Dropdown from '../dropdown';
import './card.scss';


const Card = ( { id, imgSrc, title, text, open, done } ) => {
    return (
        <div className="card">
            {done && <CheckBox />}
            <div className="card-image">
                <img src={ imgSrc } alt="IMG"/>
                <span className="card-title">{ title }</span>
            </div>
            <div className="card-content">
                <p>{ text }</p>
            </div>
            <div className="card-action">
                <Dropdown open={open} id={id} />
            </div>
        </div>
    )
}

export default Card;