import React from 'react'

import {AuthConsumer} from '../auth-service-context';

const WithAuthService = () => (Wrapped) => {
    return (props) => {
        return (
            <AuthConsumer>
                {
                    (AuthService) => {
                        return <Wrapped {...props} AuthService={AuthService} />
                    }
                }
            </AuthConsumer>
        )
    }
}

export default WithAuthService;