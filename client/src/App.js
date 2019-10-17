import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Certificates from './Components/Certificates';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Certificates} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;