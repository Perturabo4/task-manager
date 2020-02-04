import React from 'react';

import TaskListContainer from '../task-list';
import SearchBar from '../searchBar';
import TopLine from '../top-line';
import ModalForm from '../modal-form';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './app.scss';

const App = () => {
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
                <TopLine />
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="card-wrapper">
                                <TaskListContainer />
                                <ModalForm />
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

export default App;