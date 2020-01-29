import React from 'react';

import TaskList from '../task-list';
import SearchBar from '../searchBar';
import Spinner from '../spinner';
import WithTaskService from '../hoc';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './app.scss';

const App = ({TaskService}) => {
    console.log(TaskService.getTasks());
    return (
        <div className="wrapper">
            <header className="header">
                <nav>
                    <div className="nav-wrapper">
                        {/* <span className="brand-logo">Task manager app</span> */}
                        <SearchBar />
                    </div>
                </nav>
            </header>
            <main>
              
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="card-wrapper">
                                <TaskList />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="page-footer">
                    &copy; 2020 Created by Viktor Soshko
            </footer>
            
        </div>
    )
}

export default WithTaskService()(App);