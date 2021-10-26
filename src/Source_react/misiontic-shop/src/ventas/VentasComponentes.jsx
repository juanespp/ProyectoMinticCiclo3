import React, { Fragment } from 'react';
import "../ventas/css/Styles.css";
import {useAuth0} from '@auth0/auth0-react';
import {Redirect} from 'react-router';


function VentasComponentes(){
    const {isAuthenticated} = useAuth0();

    /* if(localStorage.getItem("state") === "user" && isAuthenticated){ */

    return(
        <Fragment>

    <div class="datatable-container table-responsive">

        <div class="header-tools">
            <div class="tools">
                <ul>
                    <li><span><input type="checkbox"/></span></li>
                    <li>
                        <button>
                            <i class="material-icons">add_circle</i>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="material-icons">edit</i>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="material-icons">delete</i>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="material-icons">share</i>
                        </button>
                    </li>
                </ul>
            </div>
        <div class="Search">
            <input type="text" name="" id="" class="search-input"/>

        </div>

    </div>
        <table class="datatable">
            <thead>
                <tr>
                    <th></th>
                    <th>Estado</th>
                    <th>Producto</th>
                    <th>Vendedor</th>
                    <th>Sede</th>
                    <th>Factura</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" name="" id=""/></td>
                    <td><span class="Enviado"></span></td>
                    <td>Bicicleta ruta</td>
                    <td>Miguel Patarroyo</td>
                    <td>Bogotá</td>
                    <td>2148</td>
                    <td>23/09/2021</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" name="" id=""/></td>
                    <td><span class="Pendiente"></span></td>
                    <td>Bicicleta montaña</td>
                    <td>Mónica Alfaro</td>
                    <td>Bogotá</td>
                    <td>2149</td>
                    <td>23/09/2021</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" name="" id=""/></td>
                    <td><span class="EnCamino"></span></td>
                    <td>Bicicleta niños</td>
                    <td>David Cardona</td>
                    <td>Medellín</td>
                    <td>2150</td>
                    <td>23/09/2021</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" name="" id=""/></td>
                    <td><span class="EnCamino"></span></td>
                    <td>Bicicleta fixie</td>
                    <td>Juan Aristizabal</td>
                    <td>Medellín</td>
                    <td>2151</td>
                    <td>23/09/2021</td>
                </tr><tr>
                    <td class="table-checkbox"><input type="checkbox" name="" id=""/></td>
                    <td><span class="EnCamino"></span></td>
                    <td>Bicicleta playera</td>
                    <td>Diana Martínez</td>
                    <td>Bogotá</td>
                    <td>2152</td>
                    <td>23/09/2021</td>
                </tr><tr>
                    <td class="table-checkbox"><input type="checkbox" name="" id=""/></td>
                    <td><span class="EnCamino"></span></td>
                    <td>Bicicleta todoterreno</td>
                    <td>David Cardona</td>
                    <td>Medellín</td>
                    <td>2153</td>
                    <td>23/09/2021</td>
                </tr><tr>
                    <td class="table-checkbox"><input type="checkbox" name="" id=""/></td>
                    <td><span class="Enviado"></span></td>
                    <td>Bicicleta montaña</td>
                    <td>David Cardona</td>
                    <td>Medellín</td>
                    <td>2154</td>
                    <td>24/09/2021</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" name="" id=""/></td>
                    <td><span class="Enviado"></span></td>
                    <td>Bicicleta montaña</td>
                    <td>Miguel Patarroyo</td>
                    <td>Bogotá</td>
                    <td>2155</td>
                    <td>24/09/2021</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" name="" id=""/></td>
                    <td><span class="Enviado"></span></td>
                    <td>Bicicleta fixie</td>
                    <td>Miguel Patarroyo</td>
                    <td>Bogotá</td>
                    <td>2156</td>
                    <td>25/09/2021</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" name="" id=""/></td>
                    <td><span class="Enviado"></span></td>
                    <td>Bicicleta fixie</td>
                    <td>Mónica Alfaro</td>
                    <td>Bogotá</td>
                    <td>2157</td>
                    <td>25/09/2021</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" name="" id=""/></td>
                    <td><span class="Pendiente"></span></td>
                    <td>Bicicleta playera</td>
                    <td>Mónica Alfaro</td>
                    <td>Bogotá</td>
                    <td>2158</td>
                    <td>25/09/2021</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" name="" id=""/></td>
                    <td><span class="Pendiente"></span></td>
                    <td>Bicicleta playera</td>
                    <td>Diana Martínez</td>
                    <td>Bogotá</td>
                    <td>2159</td>
                    <td>25/09/2021</td>
                </tr>
            </tbody>
        </table>

        <div class="footer-tools">
            <div class="list-items">
                show
                <select name="n-entries" id="n-entries" class="n-entries">
                    <option value="15">5</option>
                    <option value="10" selected>10</option>
                    <option value="=15">15</option>

                </select>
                entries  
            </div>

            <div class="pages">
                <ul>
                    <li><span class="active">1</span></li>
                    <li><button>2</button></li>
                    <li><button>3</button></li>
                    <li><button>4</button></li>
                    <li><span>...</span></li>
                    <li><button>9</button></li>
                    <li><button>10</button></li>
                </ul>
            </div>
        </div>

    </div>




        </Fragment>
    );
   /*  }
    else {
        return <Redirect to="/"></Redirect>
    }     */


}

export default VentasComponentes;

