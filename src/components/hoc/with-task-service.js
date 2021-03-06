import React from 'react'

import {TaskServiceConsumer} from '../task-service-context';

const WithTaskService = () => (Wrapped) => {
    return (props) => {
        return (
            <TaskServiceConsumer>
                {
                    (TaskService) => {
                        return <Wrapped {...props} TaskService={TaskService} />
                    }
                }
            </TaskServiceConsumer>
        )
    }
}

export default WithTaskService;