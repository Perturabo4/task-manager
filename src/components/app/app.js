import React from 'react';
import {Route, Router} from 'react-router-dom';
import AppContent from '../app-content';

import Auth from '../auth';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './app.scss';

const App = () => {
    return (
        <>
            <Route path="/" exact component={Auth} />
            <Route path="/app" component={AppContent} />
        </>
    )
    
}

export default App;