import React from 'react';

import Dropdown from '../dropdown';
import './card.scss';

const Card = ( { imgSrc, title, text } ) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={ imgSrc } alt="IMG"/>
                <span className="card-title">{ title }</span>
            </div>
            <div className="card-content">
                <p>{ text }</p>
            </div>
            <div className="card-action">
                <Dropdown />
            </div>
        </div>
    )
}

export default Card;