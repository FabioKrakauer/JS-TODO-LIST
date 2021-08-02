import axios from 'axios'

const API_ENDPOINT = "http://localhost:5000";
const apiClient = {
    getTasks: async () => {
        const tasks = await axios.get(API_ENDPOINT + "/tasks");
        return tasks
    },

    updateTask: async (taskId, data) => {
        const task = await axios.put(API_ENDPOINT + '/task/' + taskId, data);
        return task;
    },

    createTask: async (taskName) => {
        const task = await axios.post('http://localhost:5000/task/create', {name: taskName});
        return task;
    }
}
export default apiClient;