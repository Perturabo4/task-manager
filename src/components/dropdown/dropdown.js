import React from 'react';
import {connect} from 'react-redux';
import {compose} from '../../utils/';
import WithTaskService from '../hoc/';
import {taskOpen, deleteTask, taskDone, taskEdit} from '../../actions';
import Button from '../button';

import './dropdown.scss';

const Dropdown = ({open, id, taskOpen, deleteTask, taskDone, taskEdit}) => {
    return (
        <div className={`dropdown-wrapper ${open ? 'active' : ''}`}>
            <Button
            text={'...'}
            onClick={() => taskOpen(id)}
            />

            <ul id="dropdown1" className="dropdown-content" >
                <li onClick={() => taskDone(id)}>
                    <span>Выполнено</span>
                </li>
                <li className="divider" tabIndex="-1"></li>
                <li onClick={() => taskEdit(id)}>
                    <span>Редактировать</span>
                </li>
                <li className="divider" tabIndex="-1"></li>
                <li onClick={() => deleteTask(id)}>
                    <span>Удалить</span>
                </li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch, {TaskService}) => {
    return {
        taskOpen: (id) => dispatch(taskOpen(id)),
        deleteTask: deleteTask(dispatch, TaskService),
        taskDone: (id) => dispatch(taskDone(id)),
        taskEdit: (id) => dispatch(taskEdit(id))
    }
};

export default compose(
    WithTaskService(),
    connect(null, mapDispatchToProps)
)(Dropdown);