import './App.css';
import { ApiProvider } from './providers/ApiClient';
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <ApiProvider>
            <Home />
          </ApiProvider>
        </Route>
        <Route render={() => <div>NADA ENCONTRADO</div>}></Route>
      </Switch>
    </Router>
  );
}
export default App;
