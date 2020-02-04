import React from 'react';
import {connect} from 'react-redux';
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
                    <button 
                        className="modal-save waves-effect waves-red btn red">
                            Сохранить
                    </button>
                    <button 
                        onClick={() => tasksEdit(false)}
                        className="modal-cancel waves-effect waves-red btn red">
                            Отмена
                    </button>
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