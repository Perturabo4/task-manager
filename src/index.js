import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import AuthService from './services/auth-service';
import TaskService from './services/task-service';
import {AuthProvider} from './components/auth-service-context';
import { TaskServiceProvider } from './components/task-service-context';
import store from './store';

const taskService = new TaskService();
const authService = new AuthService();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ErrorBoundry>
                <AuthProvider value={authService}>
                    <TaskServiceProvider value={taskService}>
                        <App />
                    </TaskServiceProvider>
                </AuthProvider>
            </ErrorBoundry>
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root')
);
