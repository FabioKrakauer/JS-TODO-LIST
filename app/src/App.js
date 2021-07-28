import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home}></Route>
        <Route render={() => <div>NADA ENCONTRADO</div>}></Route>
      </Switch>
    </Router>
  );
}
export default App;
