const initialState = {
    tasks: [],
    load: true,
    error: null,
    isEdit: false
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
                isEdit: action.payload
            }
        default:
            return state;
    }

}

export default reducer;