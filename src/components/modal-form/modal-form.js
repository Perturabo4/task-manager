import React from 'react';
import {connect} from 'react-redux';
import Button from '../button';
import {tasksEdit} from '../../actions';
import './modal-form.scss';

const ModalForm = ({isEdit, tasksEdit}) => {

    const styles = {display: isEdit ? 'block' : 'none'}

    return (
        <div className="shadow" style={styles}>
             <div id="modal1" className="modal" style={styles}>
                <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <Button 
                        text="Сохранить"
                    />
                    <Button 
                        text="Отмена"
                        onClick={() => tasksEdit()}
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({isEdit}) => {
    return { isEdit };
}

const mapDispatchToProps = {
    tasksEdit
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);