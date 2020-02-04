const initialState = {
    tasks: [],
    load: true,
    error: null
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'TASKS_LOADED':
            return {
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
        default:
            return state;
    }

}

export default reducer;