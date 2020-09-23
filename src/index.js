import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import Login from './components/Login'
import List from './components/List'
import App from './set1.css'
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
    <Route path="/" exact component={Login}/>
    <Route path="/list" component={List}/>
    </Switch>
    </Router>
  </React.StrictMode>,
   document.getElementById('root')
);
serviceWorker.unregister();
