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

export { fetchTasks };