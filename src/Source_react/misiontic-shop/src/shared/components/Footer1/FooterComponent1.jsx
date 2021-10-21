import React from "react";
//import { Link } from "react-router-dom";
import './Footer_Styles.css';

function FooterComponent1 (){
    return(
        <footer className="text-center text-lg-start bg-dark text-muted">
        
            <section
            className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >
            
            <div className="me-5 d-none d-lg-block">
                <span>Buscanos en nuestras redes sociales</span>
            </div>
            
            <div className="col">
                <a href="#" className="me-4 text-reset">
                <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="me-4 text-reset">
                <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="me-4 text-reset">
                <i className="bi bi-google"></i>
                </a>
                <a href="#"className="me-4 text-reset">
                <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="me-4 text-reset">
                <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="me-4 text-reset">
                <i className="bi bi-github"></i>
                </a>
            </div>
            
            </section>
        
            <section className="">
            <div className="container text-center text-md-start mt-5">
                
                <div className="row mt-3">
                
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                
                    <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Rocky Mountain Bicycles
                    </h6>
                    <p>
                    Somos la Comercializadora más grande de bicicletas y accesorios a nivel nacional.
                    </p>
                </div>
                
        
                
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    
                    <h6 className="text-uppercase fw-bold mb-4">
                    Productos
                    </h6>
                    <p>
                    <a href="#" className="text-reset">Bicicletas</a>
                    </p>
                    <p>
                    <a href="#" className="text-reset">Cascos</a>
                    </p>
                    
                </div>
                
        
                
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    
                    <h6 className="text-uppercase fw-bold mb-4">
                    Explora
                    </h6>
                    <p>
                    <a href="#" className="text-reset">Ordenes</a>
                    </p>
                    <p>
                    <a href="#" className="text-reset">Herramientas</a>
                    </p>
                    <p>
                    <a href="#" className="text-reset">Ayuda</a>
                    </p>
                
                </div>
                
        
                
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    
                    <h6 className="text-uppercase fw-bold mb-4">
                    Contacto
                    </h6>
                    <p><i className="fas fa-home me-3"></i> Bogóta D.C, Colombia</p>
                    <p>
                    <i className="fas fa-envelope me-3"></i>
                    contacto@rmbicycles.com
                    </p>
                    <p><i className="fas fa-phone me-3"></i> + 01 8000 44 44</p>
                    <p><i className="fas fa-print me-3"></i> + 01 8000 22 22</p>
                </div>
                
                </div>
                
            </div>
            </section>
            
        
            
            <div className="text-center p-4" >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="/index.html">www.rmbicycles.com</a>
            </div>
            
      </footer>    
      
    );
}

export default FooterComponent1;