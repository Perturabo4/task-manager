import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import TaskService from './services/task-service';
import { TaskServiceProvider } from './components/task-service-context';
import store from './store';

const taskService = new TaskService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <TaskServiceProvider value={taskService}>
                <App />
            </TaskServiceProvider>
        </ErrorBoundry>
    </Provider>, 
    document.getElementById('root')
);
