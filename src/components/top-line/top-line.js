import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {tasksEdit} from '../../actions';
import Button from '../button';
import Select from '../select';

import './top-line.scss';

const TopLine = ({tasksEdit}) => {
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
                <Button onClick={() => tasksEdit(true)}
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
    return bindActionCreators({tasksEdit}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopLine);