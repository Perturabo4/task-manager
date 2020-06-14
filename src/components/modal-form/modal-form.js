import React from 'react';
import {connect} from 'react-redux';
import {compose} from '../../utils';
import WithTaskService from '../hoc';
import Button from '../button';
import Input from '../input';
import Select from '../select';
import {addTask, tasksSave, setInputValue, setPriority, isValidTask, createTask, updateTask} from '../../actions';
import './modal-form.scss';

const ModalForm = ({auth, 
                    isEdit, 
                    newTask, 
                    addTask, 
                    tasksSave, 
                    setInputValue, 
                    setPriority, 
                    isValid, 
                    isValidTask, 
                    createTask, 
                    updateTask }) => {
    
    let {title} = isValid;
    const {userId} = auth;

    const styles = {display: isEdit ? 'block' : 'none'}

    return (
        <div className="shadow" style={styles}>
             <div id="modal1" className="modal" style={styles}>
                <div className="modal-content">
                    <Input 
                        id="task_title"
                        label="Заголовок"
                        name="title"
                        onChange={(e) => setInputValue({value: e.target.value, name: e.target.name})}
                        value={newTask.title}
                        err={title ? '' : 'Поле обязательное !'}

                    />
                    <Input 
                        id="task_text"
                        label="Текст задачи"
                        name="text"
                        type="textarea"
                        onChange={(e) => setInputValue({value: e.target.value, name: e.target.name})}
                        value={newTask.text}
                    />
                    <Input 
                        id="task_img_src"
                        label="Ссылка на картинку"
                        name="imgSrc"
                        onChange={(e) => setInputValue({value: e.target.value, name: e.target.name})}
                        value={newTask.imgSrc}
                    />
                    <Select 
                        opt={{
                            high: 'Высокий',
                            normal: 'Средний',
                            low: 'Низкий'
                        }}
                        cls={['s12']}
                        label='Приоритет'
                        value={newTask.priority}
                        onChange={(e) => setPriority(e.target.value)}
                    />
                </div>
                <div className="modal-footer">
                    <Button 
                        text="Сохранить" 
                        onClick={(e) => newTask.id ? updateTask(newTask.id, newTask, false, userId) : createTask(newTask, userId) }
                    />
                    <Button 
                        text="Отмена"
                        onClick={() => addTask(false)}
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({auth, isEdit, newTask, isValid}) => {
    return { isEdit, newTask, isValid, auth };
}

const mapDispatchToProps = (dispatch, {TaskService}) => {

    return {
        addTask: (isEdit) => dispatch(addTask(isEdit)),
        tasksSave: (newTask) => dispatch(tasksSave(newTask)),
        setInputValue: (obj) => dispatch(setInputValue(obj)),
        setPriority: (priority) => dispatch(setPriority(priority)),
        isValidTask: () => dispatch(isValidTask()),
        createTask: createTask(dispatch, TaskService),
        updateTask: updateTask(dispatch, TaskService)
    }
}

export default compose(WithTaskService(),
    connect(mapStateToProps, mapDispatchToProps))(ModalForm);
