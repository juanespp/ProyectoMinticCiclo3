import React, { Fragment } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from '../src/login/LoginPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponent from './shared/components/navbar/NavbarComponent';
import LandingPage from "../src/landing_page/LandingPage";
import ProductRegister from './product_module/ProductRegister';
import FooterComponent from './shared/components/footer/FooterComponent';
import VentasComponentes from './ventas/VentasComponentes';
import User from './user/User';
import ForbidenComponent from './shared/components/Forbiden/ForbidenComponent';
import AddUserPage from './add-user/AddUserPage';

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
        <Route path="/ventas" exact>
          <VentasComponentes/>
        </Route>
        <Route path="/productos" exact>
          <ProductRegister/>
        </Route>
        <Route path="/administrar-roles" exact>
         <User/>
         </Route>
        <Route path="/add-user" exact>
        <AddUserPage/>
        </Route>
        <Route path="/Forbiden" exact>
        <ForbidenComponent />
        </Route>
      </Switch>
      <FooterComponent/>
    </Router>
  );
}

export default App;
