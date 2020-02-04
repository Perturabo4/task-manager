import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import WithTaskService from '../hoc';
import {fetchTasks} from '../../actions';
import {compose} from '../../utils';

import Card from '../card';
import Spinner from '../spinner';
import './task-list.scss';

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
                    ? tasks.map((task, id) => <Card {...task} key={id}/>)
                    : <div className="no-tasks">Список задач пуст</div>
           }
        </>
    );
}

const TaskListContainer = ({load, tasks, error, fetchTasks }) => {

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

const mapStateToProps = ({tasks, load, error}) => ({tasks, load, error});
const mapDispatchToProps = (dispatch, { TaskService }) => {
    
    return {
        fetchTasks: fetchTasks(dispatch, TaskService)
    }
};

export default compose(
    WithTaskService(),
    connect(mapStateToProps, mapDispatchToProps)
)(TaskListContainer);