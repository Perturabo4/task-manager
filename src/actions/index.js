import * as Types from '../action-types';

const tasksLoaded = (newTasks) => {
    return {
        type: Types.TASKS_LOADED, 
        payload: newTasks
    };
};

const tasksError = (error) => {
    return {
        type: Types.TASKS_ERROR, 
        payload: error
    };
};

const addTask = (edit) => {
    return {
        type: Types.ADD_TASK,
        payload: edit
    }
}

const setInputValue = (obj) => {
    return {
        type: Types.SET_INPUT_VALUE,
        payload: obj
    }
}

const setPriority = (priority) => {
    return {
        type: Types.SET_PRIORITY,
        payload: priority
    }
}

const tasksSave = (obj) => {
    return {
        type: Types.TASKS_SAVE,
        payload: obj
    }
}

const taskOpen = (id) => {
    return {
        type: Types.TASK_OPEN,
        payload: id
    }
}

const taskDelete = (id) => {
    return {
        type: Types.TASK_DELETE,
        payload: id
    }
}

const taskEdit = (id) => {
    return {
        type: Types.TASK_EDIT,
        payload: id
    }
}

const taskDone = (id) => {
    return {
        type: Types.TASK_DONE,
        payload: id
    }
}

const filterDone = (value) => {
    return {
        type: Types.FILTER_DONE,
        payload: value
    }
}

const filterPriority = (value) => {
    return {
        type: Types.FILTER_PRIORITY,
        payload: value
    }
}

const filterTitle = (value) => {
    return {
        type: Types.FILTER_TITLE,
        payload: value
    }
}

const tasksLoading = (isLoading) => {
    return {
        type: Types.TASKS_LOADING,
        payload: isLoading
    }
}

const taskInProgres = (id) => {
    return {
        type: Types.TASK_IN_PROGRES,
        payload: id
    }
}

const setAuthEmail = (text) => {
    return {
        type: Types.SET_AUTH_EMAIL,
        payload: text
    }
}

const setAuthPass = (pass) => {
    return {
        type: Types.SET_AUTH_PASS,
        payload: pass
    }
}

const userAuthenticated = (userData) => {
    return {
        type: Types.USER_AUTHENTICATED,
        payload: userData
    }
}

const logout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');

    return {
        type: Types.AUTH_LOGOUT
    }
}

const autoLogout = (time, dispatch) => {
    return (
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    );
}

const authError = (error) => {
    return {
        type: Types.AUTH_ERROR,
        payload: error
    }
}

const autoLogin = (dispatch) => {

    return (
        () => {
                const token = localStorage.getItem('token');
                const userId = localStorage.getItem('userId');

                if(!token) {
                    dispatch(logout());
                } else {
                    const expirationDate = new Date(localStorage.getItem('expirationDate'));
                    if(expirationDate <= new Date()) {
                        dispatch(logout());
                    } else {
                        dispatch(userAuthenticated({idToken: token, localId: userId}));
                        autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000, dispatch);
                    }
                }
        }
    )
}

const authUser = (dispatch, service) => async (email, pass, token) => {

    const response = await service.auth(email, pass, token);

    const {expiresIn, idToken, localId, error} = response;

    if(error) {
        console.log(error);
    }

    const expirationDate = new Date( new Date().getTime() + expiresIn * 1000);

    localStorage.setItem('token', idToken);
    localStorage.setItem('userId', localId);
    localStorage.setItem('expirationDate', expirationDate);

    dispatch(userAuthenticated(response));
    autoLogout(expiresIn, dispatch);

}

const fetchTasks = (dispatch, service) => (userId) => {
    return service.getTasks(userId)
        .then((data) => {
            dispatch(tasksLoaded(data));
        })
        .catch((err) => {
            dispatch(tasksError(err));
        });
}

const createTask = (dispatch, service) => (task, userId) => {

    dispatch(tasksLoading(true));

    const {id, ...rest} = task;

    return service.createTask(rest, userId)
        .then( res => res.json())
        .then(data => {
            dispatch(tasksSave({...task, id: data.name}));
            dispatch(tasksLoading(false));
        })
        .catch( (err) => {
            dispatch(tasksError(err));
        })
}

const updateTask = (dispatch, service) => (id, task, singleKey, userId) => {
    
    dispatch(taskInProgres(id));
    
    return service.updateTask(id, task, singleKey, userId)
        .then( res => {
            singleKey ? dispatch(taskDone(id)) : dispatch(tasksSave(task));
        })
        .catch( (err) => {
            dispatch(tasksError(err));
        })
}

const deleteTask = (dispatch, service) => (id, userId) => {

    dispatch(tasksLoading(true));
    return service.deleteTask(id, userId)
        .then( res => {
            console.log(res.json());
            dispatch(taskDelete(id));
            dispatch(tasksLoading(false));
        })
        .catch( (err) => {
            dispatch(tasksError(err));
        })
}

export { fetchTasks,
         addTask,
         setInputValue,
         setPriority,
         taskOpen,
         taskDone,
         taskEdit,
         filterDone,
         filterPriority,
         filterTitle,
         taskInProgres,
         createTask,
         deleteTask,
         updateTask,
         setAuthEmail,
         setAuthPass,
         authUser,
         logout,
         autoLogin,
         authError
        };