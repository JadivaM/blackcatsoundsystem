import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import MainPage from './pages/MainPage';
import LoadingScreen from './components/LoadingScreen';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])

  return (
    <>
    {loading === false ? (
    <div className="App">
    <Router>
    <Nav />
      <Switch>
      <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
    </div>
    ) : ( <LoadingScreen /> )}
    </>
  );
}

export default App;
