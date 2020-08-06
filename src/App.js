import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/login/Login';
import './App.sass';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
        <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
