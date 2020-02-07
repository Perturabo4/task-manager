import React from 'react';
import {connect} from 'react-redux';
import {taskOpen} from '../../actions';
import Button from '../button';

import './dropdown.scss';

const Dropdown = ({open, id, taskOpen}) => {
    return (
        <div className={`dropdown-wrapper ${open && 'active'}`}>
              <Button
                text={'...'}
                onClick={() => taskOpen(id)}
              />

                <ul id="dropdown1" className="dropdown-content" >
                    <li><span>Выполнено</span></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><span>Редактировать</span></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><span>Удалить</span></li>
                    
                </ul>
        </div>
    )
}

const mapStateToProps = (dispatch) => ({});

const mapDispatchToProps = {
    taskOpen
};

export default  connect(mapStateToProps, mapDispatchToProps)(Dropdown);