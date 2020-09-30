import React from 'react';
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route,
  Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import ListUser from './pages/ListUser';
import SystemError from './pages/SystemError';


interface State {
  isLogin: boolean
}

const App = () => {

  const isLogin = useSelector<State>(state => state.isLogin);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLogin? <Redirect to="/list" /> : <LoginPage/>}
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
