import { useAuth0 } from '@auth0/auth0-react';
import React, {Fragment, useState, useEffect} from "react";
import './css/user_styles.css'
import ForbidenComponent from '../shared/components/Forbiden/ForbidenComponent';
import AddUserPage from '../add-user/AddUserPage';


function User(props){
    
    const [users, setUsers] = useState([]);
    const [validUser, setValidUser] = useState(false);
    const { user, isAuthenticated } = useAuth0();
    const { loginWithRedirect } = useAuth0();
       
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
                {/*<div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary" >Actualizar</button>
                    <button type="button" className="btn btn-outline-secondary">Borrar</button>
                </div>*/}
            </td>
        </tr>
    );


    const updateUser = async (user) =>{
        alert(user.id)        
    }

    const deleteUser = async (user) =>{
        alert(user.id)        
    }

    const updateUser2 = async (user) =>{
        alert(user.id)        
    }
    

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
                    {/*<td>
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                            <button className="btn btn-success bg-dark" id="btnagregar" onClick={()=>updateUser (user)}>Editar</button>
                            <button className="btn btn-success bg-dark" id="btnbuscar" onClick={()=>deleteUser (user)}>Borrar</button>
                        </div> 
                    </td>*/}
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
            if (userData.rol != "Invitado") {
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
                <AddUserPage/>  
                {/*fomulario
                <div className="container_autenticar">
                        <div className="d-flex justify-content-center inp form-group">
                            <form className="w-50" id="task-form">
                                <input type="number" id="id" className="form-control" placeholder="ID usuario" onChange={(e)=> setId(e.target.value)}/>
                                <input type="text" id="nombre" className="form-control" placeholder="Nombre del usuario" onChange={(e)=> setNombre(e.target.value)}/>
                                <input type="text" id="rol" className="form-control" placeholder="Rol"onChange={(e)=> setRol(e.target.value)}/>
                                <input type="text" id="estado" className="form-control" placeholder="Estado"onChange={(e)=> setEstado(e.target.value)}/>
                                <input type="text" id="correo" className="form-control" placeholder="Correo"onChange={(e)=> setCorreo(e.target.value)}/>
                            </form>
                        </div>
                </div>
                    <div className="container_buttons1">
                        <div className="d-flex justify-content-center btninte">
                            <button className="btn btn-success bg-dark" id="btnagregar" type="button" >Agregar</button>
                            <button className="btn btn-success bg-dark" id="btnbuscar">Buscar</button>
                            <button className="btn btn-success bg-dark" id="btnactualizar">Actualizar</button>
                            <button className="btn btn-success bg-dark" id="btnborrar">Eliminar Todo</button>
                        </div>
                    </div>*/}
                

            
                {/*tabla*/}
            <div className= "container_tabla_user">
                <div className="table-responsive">
                {validUser ?<table class="table table-dark table-striped">
                        <thead>
                            <tr>
                            <th>ID</th>  
                            <th>Nombre del usuario</th> 
                            <th>Rol</th> 
                            <th>Estado</th> 
                            <th>Correo</th> 
                           {/* <th>Opciones</th> */}
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
                                {/*<td>
                                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                                            <button className="btn btn-success bg-dark" id="btnagregar">Editar</button>
                                            <button className="btn btn-success bg-dark" id="btnbuscar">Borrar</button>
                                        </div> 
                                </td>*/}
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