import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import WithTaskService from '../hoc';
import {tasksLoaded} from '../../actions';

import Card from '../card';

const TaskList = ({tasks, TaskService, tasksLoaded}) => {

    useEffect(() => {
        tasksLoaded(TaskService.getTasks());
    },[TaskService, tasksLoaded]);

    return (
        <>
           {
                tasks.map((task, id) => {
                    return <Card {...task} key={id}/>
                })
           }
        </>
    )
}

const mapStateToProps = ({tasks}) => ({tasks});
const mapDispatchToProps = {tasksLoaded};

export default WithTaskService()(connect(mapStateToProps, mapDispatchToProps)(TaskList));