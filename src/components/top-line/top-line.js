import React from 'react';
import Button from '../button';

import './top-line.scss';

const TopLine = () => {
    return (
        <div className="container">
            <div className="top-line">
                <Button 
                    color='red'
                    text='Create'
                />
            </div>
        </div>
    )
}
export default TopLine;