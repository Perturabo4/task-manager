const initialState = {
    tasks: [],
    load: true,
    error: null,
    isEdit: false,
    newTask: {
        id: '',
        title: '',
        text: '',
        imgSrc: '',
        priority: 'all',
        done: false
    }
};

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
        case 'TASKS_EDIT':
            return {
                ...state,
                isEdit: action.payload,
                newTask: {
                    id: '',
                    title: '',
                    text: '',
                    imgSrc: '',
                    priority: 'all',
                    done: false
                }
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
                tasks: state.tasks.concat(action.payload),
                newTask: {
                    id: '',
                    title: '',
                    text: '',
                    imgSrc: '',
                    priority: 'all',
                    done: false
                }
            }
        default:
            return state;
    }

}

export default reducer;