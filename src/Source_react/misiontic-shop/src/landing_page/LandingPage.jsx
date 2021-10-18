import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './css/landing-page-styles.css';
import Img1 from './img/Img1.jfif';
import Img2 from './img/Img2.jpg';
import Img3 from './img/Img3.jfif';
import Img4 from './img/Img4.jpg'; 
import Img6 from './img/Img6.jpg';
import R from './img/R.png';
import Img7 from './img/Img7.png';
import Img8 from './img/Img8.png';
import Img9 from './img/Img9.png';




function LandingPage(props) {

    return (
        <Fragment>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Img1} alt="" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={Img2} alt="" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={Img3} alt="" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={Img4} alt="" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={Img6} alt="" className="d-block w-100" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            
            <div className="container-fluid" id="separador">
                <div id="imagen-central" className="container w-50 p-15 rounded-1">
                    <div className="row align-items-center">
                        <div className="col-sm-auto p-3">
                            <img src={R} alt="" className="w-75 mx-auto d-block" />
                        </div>
                        <div className="col-sm p-3 text-light text-center">
                            <p className="text-dark h3">Bienvenidos a</p>
                            <h4 className="h2 text-shadow">Nuestra Plataforma</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div id="separador-ribbon">
                <div className="content bg-dark"></div>
            </div>

            <div id="productos-destacados">
                <div className="container-md p-5">
                    <div className="row-pt5">
                        <h3 className="text-center pb-5 pt-5 h1 text-shadow">Productos Destacados</h3>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <div className="card w-100 card-border btn-outline-primary mb-5" id="tarjetas">
                                <img src={Img7} alt="" className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">JERSEY MUJER SCOTT RALPH EDITION</h5>
                                    <p className="card-text">
                                        <ul>
                                            <li>Cremallera frontal con bloqueo semiautomático</li>
                                            <li>3 bolsillos traseros</li>
                                            <li>Bolsillo trasero repelente al agua</li>
                                            <h5>Precio $135.900</h5>
                                        </ul>
                                    </p>
                                    <a href="" className="btn btn-dark">Ordenar</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card w-100 card-border btn-outline-primary mb-5" id="tarjetas">
                                <img src={Img8} alt="" className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">GAFAS DE SOL SCOTT SPUR</h5>
                                    <p className="card-text">
                                        <ul>
                                            <li>Integración optimizada con el casco</li>
                                            <li>Refuerzo nasal ajustable</li>
                                            <li>Sistema de cambio de lentes fácil ELC </li>
                                            <li>Funda deportiva y bolsa de microfibra</li>
                                            <h5>Precio $654.900</h5>
                                        </ul>
                                    </p>
                                    <a href="" className="btn btn-dark">Ordenar</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card w-100 card-border btn-outline-primary mb-5" id="tarjetas">
                                <img src={Img9} alt="" className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">CASCO SCOTT CENTRIC</h5>
                                    <p className="card-text">
                                        <ul>
                                            <li>Diseño exclusivo y de edición limitada</li>
                                            <li>Bajo peso</li>
                                            <li>Sistema de protección encefálica MIPS® Air</li>
                                            <h5>Precio $335.900</h5>
                                        </ul>
                                    </p>
                                    <a href="" className="btn btn-dark">Ordenar</a>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>



        </Fragment>
    );
}

export default LandingPage;