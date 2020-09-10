import React from "react";
import { connect } from "react-redux";
import { compose } from "../../utils";
import WithTaskService from "../hoc";
import Button from "../button";
import Input from "../input";
import Select from "../select";
import {
  addTask,
  setInputValue,
  setPriority,
  createTask,
  updateTask,
  validateTaskBeforeCreate,
  setDateAdd,
} from "../../actions";
import "./modal-form.scss";

const ModalForm = ({
  auth,
  isEdit,
  newTask,
  addTask,
  setInputValue,
  validateTaskBeforeCreate,
  setPriority,
  createTask,
  updateTask,
  setDateAdd,
}) => {
  const { userId } = auth;

  const styles = { display: isEdit ? "block" : "none" };

  const saveTaskHandler = (e) => {
    validateTaskBeforeCreate(newTask);

    newTask.id
      ? updateTask(newTask.id, newTask, false, userId)
      : createTask(newTask, userId);
  };

  return (
    <div className="shadow" style={styles}>
      <div id="modal1" className="modal" style={styles}>
        <div className="modal-content">
          <Input
            id="task_title"
            type="text"
            label="Заголовок"
            name="title"
            onChange={(e) =>
              setInputValue({ value: e.target.value, name: e.target.name })
            }
            value={newTask.title}
          />
          <Input
            id="task_text"
            label="Текст задачи"
            name="text"
            type="textarea"
            onChange={(e) =>
              setInputValue({ value: e.target.value, name: e.target.name })
            }
            value={newTask.text}
          />
          <Input
            id="task_img_src"
            type="text"
            label="Ссылка на картинку"
            name="imgSrc"
            onChange={(e) =>
              setInputValue({ value: e.target.value, name: e.target.name })
            }
            value={newTask.imgSrc}
          />
          <Select
            opt={{
              high: "Высокий",
              normal: "Средний",
              low: "Низкий",
            }}
            cls={["s12"]}
            label="Приоритет"
            value={newTask.priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <Button text="Сохранить" onClick={saveTaskHandler} />
          <Button text="Отмена" onClick={() => addTask(false)} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth, allTasks: { isEdit, newTask } }) => {
  return { isEdit, newTask, auth };
};

const mapDispatchToProps = (dispatch, { TaskService }) => {
  return {
    addTask: (isEdit) => dispatch(addTask(isEdit)),
    setInputValue: (obj) => dispatch(setInputValue(obj)),
    setPriority: (priority) => dispatch(setPriority(priority)),
    createTask: createTask(dispatch, TaskService),
    updateTask: updateTask(dispatch, TaskService),
    validateTaskBeforeCreate: (task) =>
      dispatch(validateTaskBeforeCreate(task)),
    setDateAdd: () => dispatch(setDateAdd()),
  };
};

export default compose(
  WithTaskService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ModalForm);
