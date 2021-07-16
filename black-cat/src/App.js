import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import MainPage from './pages/MainPage';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <Router>
    <Nav />
      <Switch>
      <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
