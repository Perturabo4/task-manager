import React from 'react';
import {connect} from 'react-redux';
import {taskOpen} from '../../actions';
import TaskListContainer from '../task-list';
import SearchBar from '../searchBar';
import TopLine from '../top-line';
import ModalForm from '../modal-form';

import './app-content.scss';

const AppContent = ({taskOpen}) => {
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
                            <TaskListContainer />
                            <ModalForm />
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

const mapDispatchToProps = (dispatch) => {
    
    return {
        taskOpen: (id) => dispatch(taskOpen(id))
    }
}

export default connect(null, mapDispatchToProps)(AppContent);