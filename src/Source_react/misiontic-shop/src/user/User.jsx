import { useAuth0 } from '@auth0/auth0-react';
import React, {Fragment, useState, useEffect} from "react";
import './css/user_styles.css'
import ForbidenComponent from '../shared/components/Forbiden/ForbidenComponent';

function User(props){
    
    const [users, setUsers] = useState([]);
    const [validUser, setValidUser] = useState(false);
    const { user, isAuthenticated } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    
    //Hooks
    
        const [id, setId] = useState("0");
        const [nombre_usuario, setNombre] = useState("");
        const [rol, setRol] = useState("");
        const [estado, setEstado] = useState("");
        const [correo, setCorreo] = useState("");
  


    

    const numbers = [1,2,3,4,5];
    const listItems = numbers.map((number) =>
        <tr>
            <th scope="row">1</th>
             <td>12345</td>
             <td>Mónica Alfaro</td>
            <td>Administrador</td>
            <td>Autorizado</td>
            <td>monicaalfaromedina@gmail.com</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary" >Actualizar</button>
                    <button type="button" className="btn btn-outline-secondary">Borrar</button>
                </div>
            </td>
        </tr>
    );


    
    const getUsers= async () => {
        try {
            const response = await fetch("http://localhost:3001/get-user");
            const jsonResponse = await response.json();
            const responseUsers = jsonResponse.data;
            const listUsers = responseUsers.map((user) =>
    
                <tr>
                    <th scope="row"> {user.id} </th>
                    <td>{user.nombre_usuario}</td>
                    <td>{user.rol}</td>
                    <td>{user.estado}</td>     
                    <td>{user.correo}</td>    
                </tr>
             );
            setUsers (listUsers)
        }
        catch (error) {
            console.log(error)
        }

    }

    const validateUserRole = async () => {
        const response = await fetch(`http://localhost:3001/get-user?correo=${user.correo}`);
        const jsonResponse = await response.json();
        return jsonResponse;
    }
    const grantAccess = async () => {

        let userData;
        if (isAuthenticated) {
            userData = await validateUserRole();
            console.log(userData);

        }
        else {
            if(!verifySesion()){
                loginWithRedirect();
            }
                 
            setValidUser(false);
            return;
        }

        if (userData) {
            if (userData.rol != "invited") {
                setValidUser(true);
                localStorage.setItem("state", userData.rol);
                console.log (userData.rol);
                await getUsers();
            }
            else {
                localStorage.setItem("state", userData.rol);
                setValidUser(false);
            }
        }
        else {
            setValidUser(false);
        }
    }
    const verifySesion = () => {
        const cookies = document.cookie;
        let state = false;
        if(cookies.includes('auth0')){
            state = true;
        }
        return state;
    }

    useEffect(()=>{
        grantAccess();
        getUsers();

    }, [isAuthenticated, validUser]);

    return(
        <Fragment>
            <div className="fondo_1">

                {/*título*/}
                <div className="container text-center1">
                    <h1 class="display-3"> Usuarios y administración de roles</h1>
                </div>      
                {/*fomulario*/}
                <div className="container_autenticar">
                        <div className="d-flex justify-content-center inp form-group">
                            <form className="w-50" id="task-form">
                                <input type="number" id="id" className="form-control" placeholder="ID usuario" onChange={(data)=>setId(data.target.value)}/>
                                <input type="text" id="nombre" className="form-control" placeholder="Nombre del usuario" onChange={(data)=>setNombre(data.target.value)}/>
                                <input type="text" id="rol" className="form-control" placeholder="Rol"onChange={(data)=>setRol(data.target.value)}/>
                                <input type="text" id="estado" className="form-control" placeholder="Estado"onChange={(data)=>setEstado(data.target.value)}/>
                                <input type="text" id="correo" className="form-control" placeholder="Correo"onChange={(data)=>setCorreo(data.target.value)}/>
                            </form>
                        </div>
                </div>
                    <div className="container_buttons">
                        <div className="d-flex justify-content-center btninte">
                            <button className="btn btn-success bg-dark" id="btnagregar">Agregar</button>
                            <button className="btn btn-success bg-dark" id="btnbuscar">Buscar</button>
                            <button className="btn btn-success bg-dark" id="btnactualizar">Actualizar</button>
                            <button className="btn btn-success bg-dark" id="btnborrar">Eliminar Todo</button>
                        </div>
                    </div>
                

            
                {/*tabla*/}
            <div className= "container_tabla">
                <div className="table-responsive">
                {validUser ?<table class="table table-dark table-striped">
                        <thead>
                            <tr>
                            <th>ID</th>  
                            <th>Nombre del usuario</th> 
                            <th>Rol</th> 
                            <th>Estado</th> 
                            <th>Correo</th> 
                            <th>Opciones</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {users}
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope="row">123</th>
                                <td>Mónica Alfaro</td>
                                <td>Administrador</td>
                                <td>Autorizado</td>
                                <td>monicaalfar@gmail.com</td>
                                <td>
                                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                                            <button className="btn btn-success bg-dark" id="btnagregar">Editar</button>
                                            <button className="btn btn-success bg-dark" id="btnbuscar">Borrar</button>
                                        </div> 
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">123</th>
                                <td>Mónica Alfaro</td>
                                <td>Administrador</td>
                                <td>Autorizado</td>
                                <td>monicaalfaro@gmail.com</td>
                                <td>
                                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                                            <button className="btn btn-success bg-dark" id="btnagregar">Editar</button>
                                            <button className="btn btn-success bg-dark" id="btnbuscar">Borrar</button>
                                        </div> 
                                </td>
                            </tr>
                        </tbody>
                    </table> : <ForbidenComponent/>}
                </div>
            </div> 
        </div>    
                
        </Fragment>
    );
}
export default User;