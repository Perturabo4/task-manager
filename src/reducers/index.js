const initialState = {
    auth: {
        email: '',
        pass: '',
        userId: '',
        token: ''
    },
    tasks: [],
    load: true,
    error: null,
    isEdit: false,
    newTask: getEmptyTask (), 
    filters: {
        done: 'all',
        priority: 'all',
        taskTitle: ''
    },
    isValid: {
        title: true
    }
};

function getEmptyTask () {
    return {
        title: '',
        text: '',
        imgSrc: '',
        priority: 'normal',
        done: false,
        open: false,
        inProgres: false
    }
    /*
        return {
        title: {
            text: '',
            errorMessage: '',
            touched: false
        },
        text: {
            text: '',
            errorMessage: '',
            touched: false
        },
        imgSrc: {
            text: '',
            errorMessage: '',
            touched: false
        },
        priority: 'normal',
        done: false,
        open: false,
        inProgres: false
    }
    */
}
const getTaskToEdit = (tasks, id) => {
    if(!id) return getEmptyTask();

    const taskToEdit = tasks.filter(task => task.id === id);

    return {...taskToEdit[0], open: false};
}

const setOpen = (tasks, id) => {
    return tasks.map(task => ({...task, open: task.id === id}));
} 

const setTaskInProgres = (tasks, id) => tasks.map( task => { 
    return {...task, inProgres: task.id === id ? !task.inProgres : task.inProgres}
});

const setDone = (tasks, id) => {
    return tasks.map(task => {
        const done = task.id === id ? !task.done : task.done;
        return { ...task, done, inProgres: false }
    });
}

const deleteTask = (tasks, id) => {

    return tasks.filter( task => task.id !== id );
}

const saveTask = (tasks, newTask) => {
    const index = tasks.findIndex(({id}) => id === newTask.id);

    return index >= 0
            ? [...tasks.slice(0, index), newTask, ...tasks.slice(index + 1)]
            : [newTask, ...tasks];
}

const setFilterDone = (filters, doneValue) => {
    let done;

    switch (doneValue) {
        case 'all':
            done = 'all';
            break;
        case 'undone':
            done = false;
            break;
        case 'done':
            done = true;
            break;
        default:
            return filters;
    }

    return {...filters, done}
}

const titleValidator = (title, isValidObj) => {
    
    const isTitle = title.trim().length > 0;
    
    return {...isValidObj, title: isTitle}
}

const resetValidatorErrors = (isValidObj) => {
  const newObj = {...isValidObj};
  Object.keys(newObj).forEach( key => newObj[key] = true);

  return newObj;
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'AUTH_LOGOUT':
            return {
                ...state,
                auth: {
                        email: '',
                        pass: '',
                        userId: '',
                        token: ''
                    }
            }
        case 'USER_AUTHENTICATED':
            return {
                ...state,
                auth: {
                    ...state.auth,
                    userId: action.payload.localId,
                    token: action.payload.idToken
                }
            }
        case 'TASKS_LOADED':
            return {
                ...state,
                error: null,
                tasks: action.payload.map ? action.payload : [],
                load: false
            };
        case 'TASKS_LOADING':
            return {
                ...state,
                load: action.payload,
                isEdit: false
            }
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
                newTask: getEmptyTask(),
                isValid: resetValidatorErrors(state.isValid)
            }
        case 'TASK_OPEN':
            return {
                ...state,
                tasks: setOpen(state.tasks, action.payload)
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
        case 'TASK_IN_PROGRES':
            return {
                ...state,
                isEdit: false,
                tasks: setTaskInProgres(state.tasks, action.payload)
            }
        case 'SET_INPUT_VALUE':
            const {name, value} = action.payload;
            return {
                ...state,
                newTask: {
                    ...state.newTask,
                    [name]: value
                }
                // isValid: titleValidator(action.payload, state.isValid)
            }
        // case 'SET_TEXT':
        //     return {
        //         ...state,
        //         newTask: {
        //             ...state.newTask,
        //             text: action.payload
        //         }
        //     }
        // case 'SET_IMG':
        //     return {
        //         ...state,
        //         newTask: {
        //             ...state.newTask,
        //             imgSrc: action.payload
        //         }
        //     }
        case 'SET_PRIORITY':
            return {
                ...state,
                newTask: {
                    ...state.newTask,
                    priority: action.payload
                }
            }
        case 'TASKS_SAVE':
            if(state.newTask.title.length > 0 ) {
                return {
                    ...state,
                    tasks: saveTask(state.tasks, action.payload),
                    isEdit: false,
                    // newTask: getEmptyTask(),
                    isValid: resetValidatorErrors(state.isValid)
                }
            }

            return {
                ...state,
                isValid: {...state.isValid, title: false}
            }
            
        case 'FILTER_DONE':
            return {
                ...state,
                filters: setFilterDone(state.filters, action.payload)
            }
        case 'FILTER_PRIORITY':
            return {
                ...state,
                filters: {...state.filters, priority: action.payload}
            }
        case 'FILTER_TITLE':
            return {
                ...state,
                filters: {...state.filters, taskTitle: action.payload}
            }
        case 'IS_VALID_TASK':
            return {
                ...state,
                isValid: titleValidator(state.newTask.title, state.isValid)
            }
        case 'SET_AUTH_EMAIL':
            return {
                ...state,
                auth: {
                    ...state.auth,
                    email: action.payload
                }
            }
        case 'SET_AUTH_PASS':
            return {
                ...state,
                auth: {
                    ...state.auth,
                    pass: action.payload
                }
            }
        default:
            return state;
    }

}

export default reducer;