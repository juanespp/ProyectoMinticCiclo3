import React, { Fragment } from 'react';
import LoginPage from '../src/login/LoginPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponent from './shared/components/navbar/NavbarComponent';
import LandingPage from "../src/landing_page/LandingPage";
import ProductRegister from './product_module/ProductRegister';
import FooterComponent from './shared/components/footer/FooterComponent';
import User from './user/User';

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
        <Route path="/productos" exact>
          <ProductRegister/>
        </Route>
        <Route path="/administrar-roles" exact>
          <User/>
        </Route>
      </Switch>
      <FooterComponent/>
    </Router>
  );
}

export default App;
