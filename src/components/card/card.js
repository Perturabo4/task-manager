import React from 'react';
import Button from '../button';
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
                <Button 
                    text="..."
                    onClick={() => {}}
                    cls={['btn-small', 'red']}
                />
            </div>
        </div>
    )
}

export default Card;