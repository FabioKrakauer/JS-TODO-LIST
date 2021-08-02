import Menu from '../components/Menu'
import Tasks from '../components/Tasks'
import { Container } from 'reactstrap'

import { TasksProvider } from '../hooks/useTasks'
function Home(props) {

    return (
        <TasksProvider>
            <div>
                <Menu />
                <Container>
                    <h1>Seja bem vindo de volta, Fábio</h1>
                    <Tasks />
                </Container>
            </div>
        </TasksProvider>
    )
}

export default Home;