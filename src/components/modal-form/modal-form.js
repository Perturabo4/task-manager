import React from 'react';
import {connect} from 'react-redux';
import Button from '../button';
import Input from '../input';
import Select from '../select';
import {addTask, tasksSave, setTitle, setText, setImg, setPriority, isValidTask} from '../../actions';
import './modal-form.scss';

const ModalForm = ({isEdit, newTask, addTask, tasksSave, setTitle, setText, setImg, setPriority, isValid, isValidTask }) => {
    
    let {title} = isValid;

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
                            all: 'Все',
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
                        onClick={(e) => {
                            isValidTask();
                            if(!title) {
                                e.preventDefault();
                                return;
                            }
                            tasksSave(newTask);
                            addTask(false);
                        }}
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

const mapStateToProps = ({isEdit, newTask, isValid}) => {
    return { isEdit, newTask, isValid };
}

const mapDispatchToProps = {
    addTask,
    tasksSave,
    setTitle,
    setText,
    setImg,
    setPriority,
    isValidTask
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);