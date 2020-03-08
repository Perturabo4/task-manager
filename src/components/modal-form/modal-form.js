import React from 'react';
import {connect} from 'react-redux';
import Button from '../button';
import Input from '../input';
import Select from '../select';
import {addTask, tasksSave, setTitle, setText, setImg, setPriority} from '../../actions';
import './modal-form.scss';

const ModalForm = ({isEdit, newTask, addTask, tasksSave, setTitle, setText, setImg, setPriority, isValid }) => {
    
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
                        onClick={(e) => tasksSave(newTask) }
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
    setPriority
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);