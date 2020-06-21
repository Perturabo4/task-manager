const initialState = {
        email: '',
        pass: '',
        userId: '',
        token: ''
    }

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH_LOGOUT':
            return {
                    email: '',
                    pass: '',
                    userId: '',
                    token: ''
                }
        case 'USER_AUTHENTICATED': 
            return {
                    ...state,
                    userId: action.payload.localId,
                    token: action.payload.idToken
                }
        case 'SET_AUTH_EMAIL':
            return {
                    ...state,
                    email: action.payload
                }
        case 'SET_AUTH_PASS':
            return {
                ...state,
                pass: action.payload
            }
        default:
            return state
    }
}

export default authReducer;