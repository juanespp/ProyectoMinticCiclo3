import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './css/styles.css'
import Axios from "axios";

function ProductRegister() {
    const [id, setId] = useState(0);
    const [nombre_producto, setNombreproducto] = useState("");
    const [tipo_producto, setTipoproducto] = useState("");
    const [fabricante, setFabricante] = useState("");
    const [precio, setPrecio] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [fecha, setFecha] = useState("");

    const addProduct = async () => {
      const productData = {
        id:id,
        nombre_producto:nombre_producto,
        tipo_producto:tipo_producto,
        fabricante:fabricante,
        precio:precio,
        cantidad:cantidad,
        fecha:fecha
      }

      const response = await fetch("http://localhost:3001/add-products", {
        method:'POST',
        headers:{
          'Content-type': 'application/json'
        },
        body:JSON.stringify(productData)
      })
      const jsonResponse = await response.json();
      console.log(jsonResponse);

    };

    const deleteProduct = async () => {
      const productData = {
        id:id,
        nombre_producto:nombre_producto,
        tipo_producto:tipo_producto,
        fabricante:fabricante,
        precio:precio,
        cantidad:cantidad,
        fecha:fecha
      }
      const response = await fetch("http://localhost:3001/delete-product", {
        method: 'DELETE',
        headers:{
          'Content-type': 'application/json'
        },
        body:JSON.stringify(productData)
      })
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    };


    const [products, setProducts] = useState([]);

    const numbers = [1,2,3,4,5];
    const listItems = numbers.map((number) =>
      <tr>
        <th scope="row">1</th>
        <td>Speed 99</td>
        <td>Bicicleta Montaña</td>
        <td>Bianchi</td>
        <td>12000000</td>
        <td>3</td>
        <td>23/09/2021</td>
        <td><i class="bi bi-pencil-square btnedit"></i></td>
        <td><i class="bi bi-trash-fill btndelete"></i></td>
      </tr>
    );

    const  updateProduct = async (product) =>{
      alert(product.id)
    }

    const getProducts = async () =>{
      try{
        const response = await fetch("http://localhost:3001/get-products");
        const jsonResponse = await response.json();
        const responseProducts = jsonResponse.data;
        const listProducts = responseProducts.map((product) =>
          <tr>
            <th scope="row">{product.id}</th>
            <td>{product.nombre_producto}</td>
            <td>{product.tipo_producto}</td>
            <td>{product.fabricante}</td>
            <td>{product.precio}</td>
            <td>{product.cantidad}</td>
            <td>{product.fecha}</td>
            <td><i class="bi bi-pencil-square btnedit" onClick={() => updateProduct(product)}></i></td>
            <td><i class="bi bi-trash-fill btndelete"></i></td>
          </tr>
        );
        setProducts(listProducts)
        
      }
      catch(error){
        console.log(error)
      }
      
    }

    useEffect(() => {
      getProducts();
    },[]);

    return (
        <Fragment>
          <div className="fondo1">
            <div class="container text-center">
                <h1 class="pt-5 display-3"><span class="align-middle"> Registro de productos </span> </h1>
            </div>
        
            <div className="d-flex justify-content-center">
                <form>
                    <input type="text" id="idproducto" class="form-control" placeholder="ID Producto" onChange={(e) => setId(e.target.value)}/>
                    <input type="text" id="nombreproducto" class="form-control" placeholder="Nombre Producto" onChange={(e) => setNombreproducto(e.target.value)} />
                    <input type="text" id="tipoProducto" class="form-control" placeholder="Tipo de Producto " onChange={(e) => setTipoproducto(e.target.value)}/>
                    <div className="row">
                        <div class="col">
                            <input type="text" id="fabricante" class="form-control" placeholder="Fabricante" onChange={(e) => setFabricante(e.target.value)}/>
                         </div>
                        <div className="col">
                            <input type="text" id="precio" class="form-control" placeholder="Precio" onChange={(e) => setPrecio(e.target.value)}/>  
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" id="cantidad" class="form-control" placeholder="Cantidad" onChange={(e) => setCantidad(e.target.value)}/>
                        </div>
                        <div className="col">
                            <input type="text" id="fecha" class="form-control" placeholder="Fecha" onChange={(e) => setFecha(e.target.value)}/>
                        </div>    
                    </div>
                </form>
            </div>
            {/*Botones*/}
            <div className="d-flex justify-content-center btninte">
                <button class="btn btn-success bg-dark" id="btnagregar" onClick={addProduct}>Agregar</button>
                <button class="btn btn-success bg-dark" id="btnbuscar">Buscar</button>
                <button class="btn btn-success bg-dark" id="btnactualizar">Actualizar</button>
                <button class="btn btn-success bg-dark" id="btnborrar" onClick={deleteProduct}>Eliminar</button>
            </div>
          </div>  
          <div className="container d-flex table-responsive-sm fondo2">
              <table className="table table-striped table-dark table-sm table-hover">
                  <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Fabricante</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                      </tr>
                  </thead>
                  <tbody>
                      {products}
                     {/*  <tr>
                          <th scope="row">1</th>
                          <td>Speed 99</td>
                          <td>Bicicleta Montaña</td>
                          <td>Bianchi</td>
                          <td>12000000</td>
                          <td>3</td>
                          <td>23/09/2021</td>
                          <td><i class="bi bi-pencil-square btnedit"></i></td>
                          <td><i class="bi bi-trash-fill btndelete"></i></td>
                      </tr> */}
                     {/*  <tr>
                        <th scope="row">2</th>
                        <td>Centric Four</td>
                        <td>Cascos</td>
                        <td>Scott</td>
                        <td>335900</td>
                        <td>8</td>
                        <td>23/09/2021</td>
                        <td><i class="bi bi-pencil-square btnedit"></i></td>
                        <td><i class="bi bi-trash-fill btndelete"></i></td>
                      </tr>
                      <tr>
                      <th scope="row">3</th>
                        <td >Spur-Max</td>
                        <td>Gafas</td>
                        <td>Scott</td>
                        <td>654900</td>
                        <td>6</td>
                        <td>24/09/2021</td>
                        <td><i class="bi bi-pencil-square btnedit"></i></td>
                        <td><i class="bi bi-trash-fill btndelete"></i></td> 
                      </tr>
                      <tr>
                      <th scope="row">4</th>
                        <td>Velozter</td>
                        <td>Bicicleta carretera</td>
                        <td>Trek</td>
                        <td>8000000</td>
                        <td>8</td>
                        <td>24/09/2021</td>
                        <td><i class="bi bi-pencil-square btnedit"></i></td>
                        <td><i class="bi bi-trash-fill btndelete"></i></td>
                      </tr>
                      <tr>
                      <th scope="row">5</th>
                        <td>Jersey Ralph Edition</td>
                        <td>Jersey Mujer</td>
                        <td>Scott</td>
                        <td>135900</td>
                        <td>12</td>
                        <td>24/09/2021</td>
                        <td><i class="bi bi-pencil-square btnedit"></i></td>
                        <td><i class="bi bi-trash-fill btndelete"></i></td>
                      </tr>
                      <tr>
                      <th scope="row">6</th>
                        <td >Lightron</td>
                        <td>Bicicleta Carretera</td>
                        <td>Gw</td>
                        <td>7000000</td>
                        <td>9</td>
                        <td>24/09/2021</td>
                        <td><i class="bi bi-pencil-square btnedit"></i></td>
                        <td><i class="bi bi-trash-fill btndelete"></i></td>
                      </tr>
                      <tr>
                      <th scope="row">7</th>
                        <td >Lightron</td>
                        <td>Bicicleta Carretera</td>
                        <td>Gw</td>
                        <td>7000000</td>
                        <td>4</td>
                        <td>25/09/2021</td>
                        <td><i class="bi bi-pencil-square btnedit"></i></td>
                        <td><i class="bi bi-trash-fill btndelete"></i></td>
                      </tr>
                      <tr>
                      <th scope="row">8</th>
                        <td>Velozter</td>
                        <td>Bicicleta carretera</td>
                        <td>Trek</td>
                        <td>8000000</td>
                        <td>4</td>
                        <td>25/09/2021</td>
                        <td><i class="bi bi-pencil-square btnedit"></i></td>
                        <td><i class="bi bi-trash-fill btndelete"></i></td>
                      </tr>
                      <tr>
                      <th scope="row">9</th>
                        <td>Speed 99</td>
                        <td>Bicicleta Montaña</td>
                        <td>Bianchi</td>
                        <td>12000000</td>
                        <td>4</td>
                        <td>25/09/2021</td>
                        <td><i class="bi bi-pencil-square btnedit"></i></td>
                        <td><i class="bi bi-trash-fill btndelete"></i></td>
                      </tr> */}
                  </tbody>

              </table>

          </div>
        </Fragment>


    );

}

export default ProductRegister;