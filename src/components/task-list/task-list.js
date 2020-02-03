import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import WithTaskService from '../hoc';
import {tasksLoaded, tasksError} from '../../actions';
import {compose} from '../../utils';

import Card from '../card';
import Spinner from '../spinner';
import './task-list.scss';

const TaskList = ({load, tasks, error, TaskService, tasksLoaded, tasksError}) => {

    useEffect(() => {

        TaskService.getTasks()
            .then((data) => {
                tasksLoaded(data);
            })
            .catch((err) => tasksError(err));
        
    },[TaskService, tasksLoaded, tasksError]);

    const isTask = tasks.length > 0;

    if(error) {
        return (
            <div className="error">
                Произошла ошибка при загрузке 
            </div>
        );
    }

    return (
        <>
           {
               load
                ? <Spinner />
                : isTask 
                    ? tasks.map((task, id) => <Card {...task} key={id}/>)
                    : <div className="no-tasks">Список задач пуст</div>
           }
        </>
    );
}

const mapStateToProps = ({tasks, load, error}) => ({tasks, load, error});
const mapDispatchToProps = {tasksLoaded, tasksError};

export default compose(
    WithTaskService(),
    connect(mapStateToProps, mapDispatchToProps)
)(TaskList);