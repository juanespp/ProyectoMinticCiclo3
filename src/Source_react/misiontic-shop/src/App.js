import React, { Fragment } from 'react';
import LoginPage from '../src/login/LoginPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponent from './shared/components/navbar/NavbarComponent';
import LandingPage from "../src/landing_page/LandingPage";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
      <Route path="/login" exact>
          <LoginPage/>
        </Route>
        <Route path="/home" exact>
          <LandingPage/>
        </Route>
      </Switch>
      <p>test</p>
    </Router>
  );
}

export default App;
