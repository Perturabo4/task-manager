import API_URL from "../constants";

export default class TaskService {
  constructor() {
    this.apiUrl = API_URL;
  }

  getTasks(userId) {
    return fetch(`${this.apiUrl} ${userId}/tasks.json`)
      .then((response) => response.json())
      .then((data) => {
        return Object.keys(data).map((key) => ({ ...data[key], id: key }));
      })
      .catch((err) => new Error("Something went wrong"));
  }

  createTask(task, userId) {
    return fetch(`${this.apiUrl} ${userId}/tasks.json`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
  }

  updateTask(id, task, singleKey, userId) {
    if (singleKey) {
      const [key, val] = singleKey;

      return fetch(`${this.apiUrl} ${userId}/tasks/${id}/${key}.json`, {
        method: "PUT",
        body: val,
      });
    }

    return fetch(`${this.apiUrl} ${userId}/tasks/${id}.json`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
  }

  deleteTask(id, userId) {
    console.log(`${this.apiUrl} ${userId}/tasks/${id}.json`);
    return fetch(`${this.apiUrl} ${userId}/tasks/${id}.json`, {
      method: "DELETE",
    });
  }
}
