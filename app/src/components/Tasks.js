import React, { useState, useEffect } from 'react'
import { Table, Button, Input, Form, FormGroup, Label } from 'reactstrap'

import { TasksContext } from '../hooks/useTasks'

function Tasks(props) {

    const useTasks = React.useContext(TasksContext);
    const tasks = useTasks.tasks

    const [newTask, setNewTask] = useState('')

    useEffect(() => {
        useTasks.fetchAll()
    }, [])

    function update(taskId, status) {
        useTasks.update(taskId, { status: status })
    }

    function getNameByStatus(status) {
        const allStatus = {
            0: "A fazer",
            1: "Concluido",
        }
        return allStatus[status]
    }

    function updateInput(event) {
        setNewTask(event.target.value)
    }

    function validateForm(event) {
        useTasks.create(newTask)
        useTasks.fetchAll()
    }
    return (
        <div>
            <Form inline>
                <FormGroup>
                    <Label for="task" className="mr-sm-2">Task</Label>
                    <Input type="text" name="task" id="task" onChange={updateInput} value={newTask} />
                </FormGroup>
                <Button color="primary" className="mt-1" onClick={validateForm}>Criar</Button>
            </Form>
            <Table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Tarefa</td>
                        <td>Status</td>
                        <td>Ação</td>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) =>
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.name}</td>
                            <td>{getNameByStatus(task.status)}</td>
                            <td>
                                <Button color="success" onClick={() => update(task.id, 1)}><i className="fa fa-check" aria-hidden="true"></i></Button>
                                <Button color="danger" className="m-2" onClick={() => update(task.id, 0)}><i className="fa fa-window-close" aria-hidden="true"></i></Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
export default Tasks;