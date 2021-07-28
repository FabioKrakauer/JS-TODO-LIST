import { useState, useEffect } from 'react'
import { Table, Button, Label } from 'reactstrap'
function Tasks(props) {
    let [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tasks', {method: 'GET', mode: 'cors'})
            .then(response => {
                return response.json();
            }).then(data => {
                setTasks(data)
            }).catch(err => {
                console.log("Error Reading data " + err);
            });
    })

    function update(taskId){
        let statusUpdate = {
            "status": 0
        }
        console.log(statusUpdate)
        fetch('http://localhost:5000/task/' + taskId, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(statusUpdate)
          })
            .then(response => {
                console.log('to indo')
                return response.json();
            })
            .then(data => {
                console.log("resposta ", data)
            })
            .catch(err => {
                console.log("Error Reading data " + err);
            });
    }

    function getNameByStatus(status) {
        const allStatus = {
            0: "A fazer",
            1: "Concluido",
        }
        return allStatus[status]
    }

    return (
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
                    <tr>
                        <td>{task.id}</td>
                        <td>{task.name}</td>
                        <td>{getNameByStatus(task.status)}</td>
                        <td>
                            <Button color="success" onClick={() => update(task.id)}><i className="fa fa-check" aria-hidden="true"></i></Button>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}
export default Tasks;