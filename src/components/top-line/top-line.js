import React from 'react';
import Button from '../button';
import Select from '../select';

import './top-line.scss';

const TopLine = () => {
    return (
        <div className="container">
            <div className="top-line">
            <Select 
                    opt={{
                        all: 'Все',
                        open: 'Открытые',
                        done: 'Выполненные',
                    }}
                    label='Состояние'
                    value='all'
                />
                <Select 
                    opt={{
                        all: 'Все',
                        high: 'Высокий',
                        normal: 'Средний',
                        low: 'Низкий'
                    }}
                    label='Приоритет'
                    value='all'
                />
                <Button 
                    color='red'
                    text='Create'
                />
            </div>
        </div>
    )
}
export default TopLine;