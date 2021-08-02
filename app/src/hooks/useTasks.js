import React, {useState} from "react";
import { ApiContext } from "../providers/ApiClient";

export const TasksContext = React.createContext({});

export const TasksProvider = (props) => {
    const apiClient = React.useContext(ApiContext)

    const [tasks, setTasks] = useState([])

    async function fetchAll(){
        const allTasks = await apiClient.getTasks()
        setTasks(allTasks.data)
    }

    async function update(taskId, data) {
        await apiClient.updateTask(taskId, data)
        fetchAll()
    }

    async function create(name) {
        const task = apiClient.createTask(name)
        fetchAll()
        return task;
    }
    return (
        <TasksContext.Provider value={{ tasks, fetchAll, update, create }}>
            {props.children}
        </TasksContext.Provider>
    );
}
