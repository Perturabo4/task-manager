import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {logout} from '../../actions/';

const Logout = ({logout}) => {
    useEffect(() => {
        logout();
    }, [logout]);

    return <Redirect to='/' />
}

const mapDispatchToProps = {logout}

export default connect(null, mapDispatchToProps)(Logout);