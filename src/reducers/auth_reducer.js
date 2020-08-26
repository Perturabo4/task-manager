const initialState = {
        email: '',
        pass: '',
        userId: '',
        token: '',
        authError: null
    }

const authErrorHandler = (errorText) => {
    switch(errorText) {
        case 'INVALID_EMAIL':
        case 'EMAIL_NOT_FOUND':
            return 'Неверный логин или пароль';
        default:
            return 'Возникла ошибка при авторизации. Попробуйте повторить попытку позже.';
    }
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
        case 'AUTH_ERROR':
            return {
                ...state,
                authError: authErrorHandler(action.payload)
            }
        default:
            return state
    }
}

export default authReducer;