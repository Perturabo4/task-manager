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

const fetchTasks = (dispatch, service) => () => {
    return service.getTasks()
        .then((data) => {
            dispatch(tasksLoaded(data));
        })
        .catch((err) => {
            dispatch(tasksError(err));
        });
}

const tasksEdit = (edit) => {
    return {
        type: 'TASKS_EDIT',
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

export { fetchTasks,
         tasksEdit,
         tasksSave,
         setTitle,
         setText,
         setImg,
         setPriority,
         taskOpen };