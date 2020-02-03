import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import WithTaskService from '../hoc';
import {tasksLoaded} from '../../actions';
import {compose} from '../../utils';

import Card from '../card';
import Spinner from '../spinner';
import './task-list.scss';

const TaskList = ({load, tasks, TaskService, tasksLoaded}) => {

    useEffect(() => {

        TaskService.getTasks()
            .then((data) => {
                tasksLoaded(data);
            });
        
    },[TaskService, tasksLoaded]);

    const isTask = tasks.length > 0;

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
    )
}

const mapStateToProps = ({tasks, load}) => ({tasks, load});
const mapDispatchToProps = {tasksLoaded};

export default compose(
    WithTaskService(),
    connect(mapStateToProps, mapDispatchToProps)
)(TaskList);