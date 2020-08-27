const initialState = {
        email: '',
        pass: '',
        userId: '',
        token: '',
        authError: null
    }

const authErrorHandler = (errorText) => {
    let text = errorText.includes(' ') 
                ? errorText.slice(0, errorText.indexOf(' '))
                : errorText;
    switch(text) {
        case 'INVALID_EMAIL':
        case 'EMAIL_NOT_FOUND':
        case 'INVALID_PASSWORD':
            return 'Неверный логин или пароль';
        case 'WEAK_PASSWORD':
            return 'Пароль должен содержать не менее 6 символов';
        case 'EMAIL_EXISTS':
            return 'Пользователь с таким емейлом уже существует';
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            return 'Слишком много неудачных попыток ввода. Попробуйте позже.'
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