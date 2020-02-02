const initialState = {
    tasks: [],
    load: true
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'TASKS_LOADED':
            return {
                tasks: action.payload,
                load: false
            };
        default:
            return state;
    }

}

export default reducer;