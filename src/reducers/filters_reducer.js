const initialState = {
        done: 'all',
        priority: 'all',
        taskTitle: ''
    };

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

    const filtersReducer = (state = initialState, action) => {

        switch(action.type) {    
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
            
            default:
                return state;
        }
    
    }

export default filtersReducer;