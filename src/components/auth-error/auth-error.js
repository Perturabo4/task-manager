import React from 'react';

import './auth-error.scss';

const AuthError = ({text}) => {
    return (
        <div className="form-error">
            {text}
        </div>
    )
}

export default AuthError;