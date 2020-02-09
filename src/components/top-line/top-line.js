import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {addTask} from '../../actions';
import Button from '../button';
import Select from '../select';

import './top-line.scss';

const TopLine = ({addTask}) => {
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
                <Button onClick={() => addTask(true)}
                    color='red'
                    text='Добавить задачу'
                />
            </div>
        </div>
    )
}

const mapStateToProps = () => {
    return {};
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addTask}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopLine);