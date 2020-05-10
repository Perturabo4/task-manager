import React from 'react';
import {connect} from 'react-redux';
import {compose} from '../../utils';
import WithTaskService from '../hoc';
import Button from '../button';
import Input from '../input';
import Select from '../select';
import {addTask, tasksSave, setTitle, setText, setImg, setPriority, isValidTask, createTask, updateTask} from '../../actions';
import './modal-form.scss';

const ModalForm = ({auth, isEdit, newTask, addTask, tasksSave, setTitle, setText, setImg, setPriority, isValid, isValidTask, createTask, updateTask }) => {
    
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
                        onChange={(e) => setTitle(e.target.value)}
                        value={newTask.title}
                        err={title ? '' : 'Поле обязательное !'}

                    />
                    <Input 
                        id="task_text"
                        label="Текст задачи"
                        type="textarea"
                        onChange={(e) => setText(e.target.value)}
                        value={newTask.text}
                    />
                    <Input 
                        id="task_img_src"
                        label="Ссылка на картинку"
                        onChange={(e) => setImg(e.target.value)}
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
        setTitle: (title) => dispatch(setTitle(title)),
        setText: (text) => dispatch(setText(text)),
        setImg: (imgSrc) => dispatch(setImg(imgSrc)),
        setPriority: (priority) => dispatch(setPriority(priority)),
        isValidTask: () => dispatch(isValidTask()),
        createTask: createTask(dispatch, TaskService),
        updateTask: updateTask(dispatch, TaskService)
    }
}

export default compose(WithTaskService(),
    connect(mapStateToProps, mapDispatchToProps))(ModalForm);
