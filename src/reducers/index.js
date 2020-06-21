import authReducer from './auth_reducer';
import tasksReducer from './tasks_reducer';
import filtersReducer from './filters_reducer';

const reducer = (state = {}, action) => {

    return {
        auth: authReducer(state.auth, action),
        allTasks: tasksReducer(state.allTasks, action),
        filters: filtersReducer(state.filters, action)
    }
}

export default reducer;