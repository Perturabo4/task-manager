export default class TaskService {

    getTasks() {
        return fetch('https://task-manager-55ca3.firebaseio.com/tasks.json')
                .then( response => response.json())
                .then( data => {
                    return  Object.keys(data).map( key => ({...data[key], id: key}));
                })
                .catch( err => new Error('Something went wrong'))
    }

    createTask(task) {
       return fetch('https://task-manager-55ca3.firebaseio.com/tasks.json', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
    }

    updateTask(id, task, singleKey) {

        if(singleKey) {

            const [key, val] = singleKey;

            return fetch(`https://task-manager-55ca3.firebaseio.com/tasks/${id}/${key}.json`, {
                method: 'PUT',
                body: val
            })
        }

        return fetch(`https://task-manager-55ca3.firebaseio.com/tasks/${id}.json`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
         })
     
     }

    deleteTask(id) {
        return fetch(`https://task-manager-55ca3.firebaseio.com/tasks/${id}.json`, {
             method: 'DELETE',
         })
     
     }
}