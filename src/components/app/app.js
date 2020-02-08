import React from 'react';
import {connect} from 'react-redux';

import {taskOpen} from '../../actions';
import TaskListContainer from '../task-list';
import SearchBar from '../searchBar';
import TopLine from '../top-line';
import ModalForm from '../modal-form';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './app.scss';

const App = ({taskOpen}) => {
    return (
        <div className="wrapper" onClick={() => taskOpen()}>
            <header className="header">
                <nav>
                    <div className="nav-wrapper">
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

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        taskOpen: (id) => dispatch(taskOpen(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);