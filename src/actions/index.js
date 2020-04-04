const tasksLoaded = (newTasks) => {
    return {
        type: 'TASKS_LOADED', 
        payload: newTasks
    };
};

const tasksError = (error) => {
    return {
        type: 'TASKS_ERROR', 
        payload: error
    };
};

const addTask = (edit) => {
    return {
        type: 'ADD_TASK',
        payload: edit
    }
}

const setTitle = (title) => {
    return {
        type: 'SET_TITLE',
        payload: title
    }
}

const setText = (text) => {
    return {
        type: 'SET_TEXT',
        payload: text
    }
}

const setImg = (imgSrc) => {
    return {
        type: 'SET_IMG',
        payload: imgSrc
    }
}

const setPriority = (priority) => {
    return {
        type: 'SET_PRIORITY',
        payload: priority
    }
}

const tasksSave = (obj) => {
    return {
        type: 'TASKS_SAVE',
        payload: obj
    }
}

const taskOpen = (id) => {
    return {
        type: 'TASK_OPEN',
        payload: id
    }
}

const taskDelete = (id) => {
    return {
        type: 'TASK_DELETE',
        payload: id
    }
}

const taskEdit = (id) => {
    return {
        type: 'TASK_EDIT',
        payload: id
    }
}

const taskDone = (id) => {
    return {
        type: 'TASK_DONE',
        payload: id
    }
}

const filterDone = (value) => {
    return {
        type: 'FILTER_DONE',
        payload: value
    }
}

const filterPriority = (value) => {
    return {
        type: 'FILTER_PRIORITY',
        payload: value
    }
}

const filterTitle = (value) => {
    return {
        type: 'FILTER_TITLE',
        payload: value
    }
}

const isValidTask = () => {
    return {
        type: 'IS_VALID_TASK'
    }
}

const tasksLoading = (isLoading) => {
    return {
        type: 'TASKS_LOADING',
        payload: isLoading
    }
}

const taskInProgres = (id) => {
    return {
        type: 'TASK_IN_PROGRES',
        payload: id
    }
}

const fetchTasks = (dispatch, service) => () => {
    return service.getTasks()
        .then((data) => {
            dispatch(tasksLoaded(data));
        })
        .catch((err) => {
            dispatch(tasksError(err));
        });
}

const createTask = (dispatch, service) => (task) => {

    dispatch(tasksLoading(true));

    return service.createTask(task)
        .then( res => res.json())
        .then(data => {
            dispatch(tasksSave({...task, id: data.name}));
            dispatch(tasksLoading(false));
        })
        .catch( (err) => {
            dispatch(tasksError(err));
        })
}

const updateTask = (dispatch, service) => (id, task, singleKey) => {
    
    dispatch(taskInProgres(id));
    
    console.log(task);
    return service.updateTask(id, task, singleKey)
        .then( res => {
            singleKey ? dispatch(taskDone(id)) : dispatch(tasksSave(task));
        })
        .catch( (err) => {
            dispatch(tasksError(err));
        })
}

const deleteTask = (dispatch, service) => (id) => {

    dispatch(tasksLoading(true));
    return service.deleteTask(id)
        .then( res => {
            dispatch(taskDelete(id));
            dispatch(tasksLoading(false));
        })
        .catch( (err) => {
            dispatch(tasksError(err));
        })
}


export { fetchTasks,
         addTask,
         tasksSave,
         setTitle,
         setText,
         setImg,
         setPriority,
         taskOpen,
         taskDone,
         taskEdit,
         filterDone,
         filterPriority,
         filterTitle,
         isValidTask,
         taskInProgres,
         createTask,
         deleteTask,
         updateTask
        };