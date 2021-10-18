import React, {Fragment, useState, useEffect} from "react";
import './css/user_styles.css'

function User(props){
    const [user, setUser] = useState([]);
    const [nombre, setNombre] = useState("");
    const [id, setId] = useState("0");
    const [rol, setRol] = useState("");
    const [estado, setEstado] = useState("");
    
    const getUser= async () => {
        try {
            const response = await fetch("http://localhost:3001/get-user");
            const jsonResponse = await response.json();
            const responseUser = jsonResponse.data;
            const listUser = responseUser.map((user) =>
    
                <tr>
                    <th scope="row"> {user.nombre_usuario} </th>
                    <td>{user.id}</td>
                    <td>{user.rol}</td>
                    <td>{user.estado}</td>         
                </tr>
             );
            setUser (listUser)
        }
        catch (error) {
            console.log(error)
        }

    }
    useEffect(()=>{
        getUser();

    },[]);

    return(
        <Fragment>
            {/*título*/}
            <div className="container text-center  justify-content-center ">
                <h1 className="pt-5 display-3"><span className="align-middle"> Usuarios y administración de roles </span> </h1>
            </div>

            {/*fomulario*/}
            <div className="container_autenticar">
                    <div className="d-flex justify-content-center inp form-group">
                        <form className="w-50" id="task-form">
                            <input type="text" id="idproducto" className="form-control" placeholder="Nombre del usuario" onChange={(data)=>setNombre(data.target.value)}/>
                            <input type="text" id="nombreproducto" className="form-control" placeholder="ID usuario" onChange={(data)=>setId(data.target.value)}/>
                            <input type="text" id="tipoProducto" className="form-control" placeholder="Rol"onChange={(data)=>setRol(data.target.value)}/>
                            <input type="text" id="tipoProducto" className="form-control" placeholder="Estado"onChange={(data)=>setEstado(data.target.value)}/>
                        </form>
                    </div>
            
                    <div className="d-flex justify-content-center btninte">
                        <button className="btn btn-success bg-dark" id="btnagregar">Agregar</button>
                        <button className="btn btn-success bg-dark" id="btnbuscar">Buscar</button>
                        <button className="btn btn-success bg-dark" id="btnactualizar">Actualizar</button>
                        <button className="btn btn-success bg-dark" id="btnborrar">Eliminar Todo</button>
                    </div>
            </div>

           
            {/*tabla*/}
            <div className="container_tabla container d-flex table-responsive-sm" >
                <div className="shadow p-3 mb-5 bg-body rounded">
                    <div className="table-responsive">
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                        <th></th>
                                        <th>Nombre de usuario</th>
                                        <th>ID</th>
                                        <th>Rol</th>
                                        <th>Estado</th>
                                        <th>Opciones</th>
                                        
                                </tr>
                            </thead>
                            <tbody>
                                {user}
                            </tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><span className="Nombre">Mónica Alfaro</span></td>
                                    <td>12345</td>
                                    <td>Administrador</td>
                                    <td>Autorizado</td>
                                    <td><div className="btn-group" role="group" aria-label="Basic outlined example">
                                        <button type="button" className="btn btn-outline-primary" >Actualizar
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary">Borrar</button>
                                        </div>
                                    </td>
                                </tr>
                        </table>
                    </div>  
                </div>
            </div>
             
        </Fragment>
    );
}
export default User;