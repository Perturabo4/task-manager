import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import AppContent from '../app-content';
import Logout from '../logout';

import Auth from '../auth';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './app.scss';

const App = ({userId}) => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Auth} />
                {userId ? <Route path="/logout" component={Logout} /> : null}
                {userId ? <Route path="/app" component={AppContent} /> : null}
                
                <Redirect to={"/"} />
            </Switch>
        </>
    )
    
}

const mapStateToProps = ({auth}) => ({...auth});

export default connect(mapStateToProps)(App);