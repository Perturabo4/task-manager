import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import WithTaskService from '../hoc';
import {fetchTasks} from '../../actions';
import {compose} from '../../utils';

import Card from '../card';
import Spinner from '../spinner';
import './task-list.scss';

const getVisibilityTasks = (tasks, filters) => {
    let filteredTasks = [...tasks];

    if(filters.taskTitle.trim()) {
        filteredTasks = filteredTasks.filter( task => task.title.toLowerCase().indexOf(filters.taskTitle.toLowerCase()) >= 0);
    }
    if(filters.done !== 'all') {
        filteredTasks = filteredTasks.filter( task => task.done === filters.done);
    }
    if(filters.priority !== 'all') {
        filteredTasks = filteredTasks.filter( task => task.priority === filters.priority);
    }

    return filteredTasks;
}

const TaskList = ({error, load, tasks, isTask}) => {

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
                    ? tasks.map( task => <Card task={task} key={task.id} inProgres={task.inProgres}/>)
                    : <div className="no-tasks">Список задач пуст</div>
           }
        </>
    );
}

const TaskListContainer = ({ load, tasks, error, fetchTasks }) => {

    useEffect(() => {

        fetchTasks();
        
    },[fetchTasks]);

    const isTask = tasks.length > 0;

    return <TaskList 
                error={error}
                load={load}
                tasks={tasks}
                isTask={isTask}
             />
}

const mapStateToProps = ({tasks, load, error, filters}) => {

    return {
        tasks: getVisibilityTasks(tasks, filters), 
        load, 
        error
    };
}
const mapDispatchToProps = (dispatch, { TaskService }) => {
    
    return {
        fetchTasks: fetchTasks(dispatch, TaskService)
    }
};

export default compose(
    WithTaskService(),
    connect(mapStateToProps, mapDispatchToProps)
)(TaskListContainer);