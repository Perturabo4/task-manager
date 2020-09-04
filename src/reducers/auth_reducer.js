const initialState = {
  email: {
    value: "",
    errorMessage: null,
  },
  pass: {
    value: "",
    errorMessage: null,
  },
  userId: "",
  token: "",
  authError: null,
};

const authErrorHandler = (errorText) => {
  let text = errorText.includes(" ")
    ? errorText.slice(0, errorText.indexOf(" "))
    : errorText;
  switch (text) {
    case "FIELDS_IS_EMPTY":
      return "Заполните e-mail и пароль";
    case "INVALID_EMAIL":
      return "Некоректный e-mail";
    case "EMAIL_NOT_FOUND":
    case "INVALID_PASSWORD":
      return "Неверный e-mail или пароль";
    case "WEAK_PASSWORD":
      return "Пароль должен содержать не менее 6 символов";
    case "EMAIL_EXISTS":
      return "Пользователь с таким емейлом уже существует";
    case "TOO_MANY_ATTEMPTS_TRY_LATER":
      return "Слишком много неудачных попыток ввода. Попробуйте позже.";
    default:
      return "Возникла ошибка при авторизации. Попробуйте повторить попытку позже.";
  }
};

const inputValidation = (inpName, value) => {
  const emailRegExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  switch (inpName) {
    case "pass":
      return value.trim().length >= 6 || !value
        ? null
        : "Пароль должен содержать не менее 6 символов";
    case "email":
      return emailRegExp.test(value) || !value ? null : "Некоректный e-mail";
    default:
      return null;
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_LOGOUT":
      return initialState;

    case "USER_AUTHENTICATED":
      return {
        ...state,
        userId: action.payload.localId,
        token: action.payload.idToken,
      };
    case "SET_AUTH_INPUT_VALUE":
      const { value, name } = action.payload;
      return {
        ...state,
        [name]: {
          ...state[name],
          value: value,
          errorMessage: inputValidation(name, value),
        },
      };
    case "AUTH_ERROR":
      return {
        ...state,
        authError: authErrorHandler(action.payload),
      };
    default:
      return state;
  }
};

export default authReducer;
