import React, {Fragment, useState} from "react";


//Hooks
const AddUserPage = () =>{
    
    const [id, setId] = useState("0");
    const [nombre_usuario, setNombre] = useState("");
    const [rol, setRol] = useState("");
    const [estado, setEstado] = useState("");
    const [correo, setCorreo] = useState("");
    const addUser = async () =>{
        const userData ={
            id: id,
            nombre_usuario: nombre_usuario,
            rol: rol,
            estado: estado,
            correo: correo
        }
        const response = await fetch("http://localhost:3001/add-user", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(userData)
        });
        const jsonResponse = await response.json();
             console.log(jsonResponse);
    }

    const deleteUser = async () =>{
        const userData ={
            id: id,
            nombre_usuario: nombre_usuario,
            rol: rol,
            estado: estado,
            correo: correo
        }
        const response = await fetch("http://localhost:3001/delete-user", {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(userData)
        });
        const jsonResponse = await response.json();
             console.log(jsonResponse);
    }

    const updateUser2 = async () =>{
        const userData ={
            id: id,
            nombre_usuario: nombre_usuario,
            rol: rol,
            estado: estado,
            correo: correo
        }
        const response = await fetch("http://localhost:3001/update-user", {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(userData)
        });
        const jsonResponse = await response.json();
             console.log(jsonResponse);
    }



    return(
        <Fragment>     
            <div className="container_autenticar">
                <div className="d-flex justify-content-center inp form-group">
                    <form className="w-50" id="task-form">
                        <input type="number" id="id" className="form-control" placeholder="ID usuario" onChange={(e)=> setId(e.target.value)}/>
                        <input type="text" id="nombre" className="form-control" placeholder="Nombre del usuario" onChange={(e)=> setNombre(e.target.value)}/>
                        <input type="text" id="rol" className="form-control" placeholder="Rol"onChange={(e)=> setRol(e.target.value)}/>
                        <input type="text" id="estado" className="form-control" placeholder="Estado "onChange={(e)=> setEstado(e.target.value)}/>
                        <input type="text" id="correo" className="form-control" placeholder="Correo"onChange={(e)=> setCorreo(e.target.value)}/>
                    </form>
                </div>
            </div>
                    <div className="container_buttons">
                        <div className="d-flex justify-content-center btninte">
                            <button className="btn btn-success bg-dark" id="btnagregar" type="button" onClick={addUser}>Agregar</button>
                            {/*<button className="btn btn-success bg-dark" id="btnbuscar">Buscar</button>*/}
                            <button className="btn btn-success bg-dark" id="btnactualizar" type="button" onClick={updateUser2}>Actualizar/Editar</button>
                            <button className="btn btn-success bg-dark" id="btnborrar" type="button" onClick={deleteUser}>Eliminar</button>
                        </div>
                    </div>
                
         </Fragment>
 
    )
}




export default AddUserPage

