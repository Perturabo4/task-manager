import React from 'react';
import {connect} from 'react-redux';
import Button from '../button';
import Input from '../input';
import Select from '../select';
import {tasksEdit} from '../../actions';
import './modal-form.scss';

const ModalForm = ({isEdit, tasksEdit}) => {

    const styles = {display: isEdit ? 'block' : 'none'}

    return (
        <div className="shadow" style={styles}>
             <div id="modal1" className="modal" style={styles}>
                <div className="modal-content">
                    <Input 
                        id="task_title"
                        label="Заголовок"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <Input 
                        id="task_title"
                        label="Текст задачи"
                        type="textarea"
                        onChange={(e) => console.log(e.target.value)}
                    />
                       <Select 
                            opt={{
                                all: 'Все',
                                high: 'Высокий',
                                normal: 'Средний',
                                low: 'Низкий'
                            }}
                            cls={['s12']}
                            label='Приоритет'
                            value='all'
                        />
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