import Menu from '../components/Menu'
import Tasks from '../components/Tasks'
import { Container } from 'reactstrap'
function Home(props) {

    return(
        <div>
            <Menu />
            <Container>
                <h1>Seja bem vindo de volta, Fábio</h1>
                <Tasks />
            </Container>
        </div>
    )
}

export default Home;