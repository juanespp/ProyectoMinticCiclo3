import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import './footer_styles.css'

function FooterComponent(props){
    return(
        <Fragment>
            <footer className="text-center text-lg-start bg-dark text-muted">
            <div className="container-buscanos justify-content-center justify-content-xl-between p-5 border-bottom">
                <section className="d-flex ">
                    
                    <div className="me-5 d-none d-lg-block">
                        <span>Buscanos en nuestras redes sociales</span>
                    </div>
                            <div class="social-icons">
                                <ul class="list-group list-group-horizontal">
                                    <li><a href="" className=" text-reset"><i className ="bi bi-facebook"></i></a></li>
                                    <li><a href="" className="text-reset"><i className ="bi bi-twitter"></i></a></li>
                                    <li><a href="" className="text-reset"><i className ="bi bi-google"></i></a></li>
                                    <li><a href="" className="text-reset"><i className ="bi bi-instagram"></i></a></li>
                                    <li><a href="" className="text-reset"><i className ="bi bi-linkedin"></i></a></li>
                                    <li><a href="" className="text-reset"><i className ="bi bi-github"></i></a></li>
                                </ul>
                                    
                            </div>                   
                </section>
                </div>
               <section>
                   <div className="container1 text-center text-md-start mt-5">
                       <div className="row mt-3">
                           <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                               <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Rocky Mountain Bicycles
                               </h6>
                               <p>
                                 Somos la Comercializadora mas grande de bicicletas y accesorios a nivel nacional.
                               </p>
                           </div>
                           <div className="col-md-1 col-lg-1 col-xl-1 mx-auto mb-4">
                               <h6 className="text-uppercase fw-bold mb-4">
                                 Productos
                               </h6>
                               <p>
                                    <a href="" className="text-reset">Bicicletas</a>
                               </p>
                               <p>
                                   <a href="" className="text-reset">Cascos</a>
                               </p>
                           </div>
                           <div className="col-md-1 col-lg-1 col-xl-1 mx-auto mb-4">
                               <h6 className="text-uppercase fw-bold mb-4">
                                    Explora
                               </h6>
                               <p>
                                   <a href="" className="text-reset">Ordenes</a>
                               </p>
                               <p>
                                   <a href="" className="text-reset">Herramientas</a>
                               </p>
                               <p>
                                   <a href="" className="text-reset">Ayuda</a>
                               </p>
                           </div>
                           <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contacto
                                </h6>
                                <p><i class="fas fa-home me-3"></i> Bogóta D.C, Colombia</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                     contacto@rmbicycles.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> + 01 8000 44 44</p>
                                <p><i class="fas fa-print me-3"></i> + 01 8000 22 22</p>
                           </div>
                       </div>
                   </div>
               </section>
              <div className="text-center p-4">
                  
                    © 2021 Copyright: <a href="" className="text-center text-reset fw-bold">www.rmbicycles.com</a>
                    
              </div>
        </footer>

        </Fragment>

    )

}

export default FooterComponent;