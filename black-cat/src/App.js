import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';

import MainPage from './pages/MainPage';

function App() {
  return (
    <>
    <Router>
    <Nav />
      <Switch>
      <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>

    </>
  );
}

export default App;
