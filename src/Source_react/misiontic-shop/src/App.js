import React, { Fragment } from 'react';
import LoginPage from '../src/login/LoginPage';
import RegisterPage from '../src/register/RegisterPage'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponent from './shared/components/navbar/NavbarComponent';
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
      <Route path="/" exact>
          <LoginPage/>
        </Route>
        <Route path="/register" exact>
          <RegisterPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
