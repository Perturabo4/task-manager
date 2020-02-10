import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {addTask, 
        filterDone, 
        filterPriority } from '../../actions';
import Button from '../button';
import Select from '../select';

import './top-line.scss';

const TopLine = ({filters, filterDone, filterPriority, addTask}) => {

    let done;
// Переделать **********************
    if(filters.done === true) {
        done = 'done'
    }

    if(filters.done === false) {
        done = 'undone'
    }

    if(filters.done === 'all') {
        done = 'all'
    }
// *******************************************

    return (
        <div className="container">
            <div className="top-line">
                <Select 
                    opt={{
                        all: 'Все',
                        undone: 'Открытые',
                        done: 'Выполненные',
                    }}
                    label='Состояние'
                    value={done}
                    onChange={(e) => filterDone(e.target.value)}
                />
                <Select 
                    opt={{
                        all: 'Все',
                        high: 'Высокий',
                        normal: 'Средний',
                        low: 'Низкий'
                    }}
                    label='Приоритет'
                    value={filters.priority}
                    onChange={(e) => filterPriority(e.target.value)}
                />
                <Button onClick={() => addTask(true)}
                    color='red'
                    text='Добавить задачу'
                />
            </div>
        </div>
    )
}

const mapStateToProps = ({filters}) => {
    return { filters };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            addTask,
            filterDone,
            filterPriority
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopLine);