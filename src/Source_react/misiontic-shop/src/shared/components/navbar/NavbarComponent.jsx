import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './Rocky-Mountain-bicycles-Logo.png';
import './navbar-styles.css';
import { useAuth0 } from "@auth0/auth0-react";


function NavbarComponent(props) {
    const { logout } = useAuth0();
    const {user, isAuthenticated} = useAuth0();
    let title = props.title;

    return (
        <Fragment>

            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Rocky Mountain Bikes</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap" rel="stylesheet" />
            </head>

            <section>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img className="myImage" src={logo} alt="logo" />
                        </a>

                        

                        <button class="navbar-toggler"
                            type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">

                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            
                            <ul class="navbar-nav m-md-auto">
                                <li class="nav-item">
                                    <Link to="/home" class="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/login" class="nav-link active" aria-current="page">Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="productos" class="nav-link " href="#">Productos</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Ventas
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link to="/ventas" class="dropdown-item">Estado de ventas</Link></li>
                                     {/*    <li><a class="dropdown-item">Administrar pedidos</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item">Inventarios</a></li> */}
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <Link to="administrar-roles" class="nav-link" href="#">Administrar Roles</Link>
                                </li>
                                
                            </ul>
                            <form class="d-flex">
                                <input class="form-control2 me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                            
                                <div className="navbar-nav">
                                    <Link to="/register" className="nav-link">Register</Link>
                                    {isAuthenticated ? <a className="nav-link" onClick={() => logout({ returnTo: window.location.origin })}>Logout</a> : null}
                                </div>
                            
                        </div>
                    </div>
                </nav>
            </section>
        </Fragment>
    );
}

export default NavbarComponent;