import React from 'react';
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ListUser from './pages/ListUser';
import SystemError from './pages/SystemError';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LoginPage/>
        </Route>
        <Route path="/list">
          <ListUser/>
        </Route>
        <Route path="/error">
          <SystemError/>
        </Route>
      </Switch>
    </Router>
    // <>
    //   <button onClick={() => dispatch(openModal())}>Click here</button>
    //   <DemoModal />
    // </>
  )
}

export default App;
