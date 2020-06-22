const initialState = {
        done: 'all',
        priority: 'all',
        taskTitle: ''
    };

    const setFilterDone = (state, doneValue) => {
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
                return state;
        }
    
        return {...state, done}
    }

    const filtersReducer = (state = initialState, action) => {

        switch(action.type) {    
            case 'FILTER_DONE':
                return setFilterDone(state, action.payload);
            case 'FILTER_PRIORITY':
                return {...state, priority: action.payload};
            case 'FILTER_TITLE':
                return {...state, taskTitle: action.payload}
            default:
                return state;
        }
    
    }

export default filtersReducer;