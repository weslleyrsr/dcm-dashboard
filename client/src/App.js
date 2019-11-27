import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import Certificates from './Components/Certificates';

function App() {
  const [auth, setAuth] = useState(
    sessionStorage.getItem('auth') || false
  );

  useEffect(() => {
    if(!auth === false){
      sessionStorage.setItem('auth', auth);
    }
  }, [auth]);

  return (
    auth
      ? <div className="App">
          <Router>
            <Switch>
              <Route path="/" exact component={Certificates} />
            </Switch>
          </Router>
        </div>

      : <Login setAuth={setAuth}/>
  );
}

export default App;