const initialState = {
    tasks: []
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'TASKS_LOADED':
            return {
                tasks: action.payload
            }
    }
    return state;
}

export default reducer;