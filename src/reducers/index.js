const initialState = {
    tasks: [],
    load: true,
    error: null,
    isEdit: false,
    newTask: getEmptyTask ()
};

function getEmptyTask () {
    return {
        id: new Date().getTime(),
        title: '',
        text: '',
        imgSrc: '',
        priority: 'all',
        done: false,
        open: false
    }
}
const getTaskToEdit = (tasks, id) => {
    if(!id) return getEmptyTask();

    const taskToEdit = tasks.filter(task => task.id === id);

    return taskToEdit[0];
}

const setEdit = (tasks, id) => {
    return tasks.map(task => ({...task, open: task.id === id}));
} 

const setDone = (tasks, id) => {
    
    return tasks.map(task => {
        const done = task.id === id ? !task.done : task.done;
        return { ...task, done }
    });
} 

const deleteTask = (tasks, id) => {
    return tasks.filter( task => task.id !== id);
}

const saveTask = (tasks, newTask) => {
    const index = tasks.findIndex(({id}) => id === newTask.id);

    return index >= 0
            ? [...tasks.slice(0, index), newTask, ...tasks.slice(index + 1)]
            : [newTask, ...tasks];
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'TASKS_LOADED':
            return {
                ...state,
                error: null,
                tasks: action.payload,
                load: false
            };
        case 'TASKS_ERROR':
            return {
                ...state,
                load: false,
                error: action.payload
            };
        case 'ADD_TASK':
            return {
                ...state,
                isEdit: action.payload,
                newTask: getEmptyTask()
            }
        case 'TASK_OPEN':
            return {
                ...state,
                tasks: setEdit(state.tasks, action.payload)
            }
        case 'TASK_DELETE':
            return {
                ...state,
                tasks: deleteTask(state.tasks, action.payload)
            }
        case 'TASK_EDIT':
            return {
                ...state,
                isEdit: true,
                newTask: getTaskToEdit(state.tasks, action.payload)
            }
        case 'TASK_DONE':
            return {
                ...state,
                tasks: setDone(state.tasks, action.payload)
            }
        case 'SET_TITLE':
            return {
                ...state,
                newTask: {
                    ...state.newTask,
                    title: action.payload
                }
            }
        case 'SET_TEXT':
            return {
                ...state,
                newTask: {
                    ...state.newTask,
                    text: action.payload
                }
            }
        case 'SET_IMG':
            return {
                ...state,
                newTask: {
                    ...state.newTask,
                    imgSrc: action.payload
                }
            }
        case 'SET_PRIORITY':
            return {
                ...state,
                newTask: {
                    ...state.newTask,
                    priority: action.payload
                }
            }
        case 'TASKS_SAVE':
            return {
                ...state,
                tasks: saveTask(state.tasks, action.payload)
            }
        default:
            return state;
    }

}

export default reducer;