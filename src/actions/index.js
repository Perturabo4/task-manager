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

export {tasksLoaded, tasksError};