import React from 'react';
import {connect} from 'react-redux';
import {taskOpen, taskDelete, taskDone, taskEdit} from '../../actions';
import Button from '../button';

import './dropdown.scss';

const Dropdown = ({open, id, taskOpen, taskDelete, taskDone, taskEdit}) => {
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
                <li onClick={() => taskDelete(id)}>
                    <span>Удалить</span>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    taskOpen,
    taskDelete,
    taskDone,
    taskEdit
};

export default  connect(mapStateToProps, mapDispatchToProps)(Dropdown);