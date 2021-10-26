const { request, response } = require('express');
const express = require('express');
const app = express();
const port = 3001
const mysql = require('mysql2/promise');
const bluebird = require('bluebird');
const cors = require('cors');

let connection;

app.use(cors());
app.use(express.json()); //Middleware

// obtetener endpoints con una función anonima. Buscar producto
app.get("/get-user", async(request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM usuarios")
    console.log(rows);
    console.log(fields);
    console.log({data:rows});
    response.json({data:rows});
})

app.get("/get-user", async (req,res) =>{
    const correo= req.query.correo;
    const [rows, fields] = await connection.execute(`SELECT * FROM usuarios where correo='${correo}'`);
    console.log("Hola")
    res.json(rows[0]) 
})

//Agregar
app.post("/add-user", async (req, res) =>{
    const {id, nombre_usuario,rol,estado, correo} = req.body;
    const user= req.body; 
    /* const user= req.body;
    const id= user.id;
    const nombre_usuario=user.nombre_usuario;
    const rol=user.rol;
    const estado=user.estado;
    const correo=user.correo; */
    await connection.execute(`INSERT INTO usuarios (id, nombre_usuario, rol, estado, correo) VALUES (${id},'${nombre_usuario}','${rol}', '${estado}','${correo}') `);
    console.log(user.name)
    res.json(user);
})

// Actualizar
app.put("/update-user", async (req, res) =>{
    const user = req.body;
    const id= user.id;
    const nombre_usuario=user.nombre_usuario;
    const rol=user.rol;
    const estado=user.estado;
    const correo=user.correo;
    await connection.execute(`UPDATE usuarios SET rol= '${rol}' WHERE id= ${id}`);
    await connection.execute(`UPDATE usuarios SET  estado = '${estado}' WHERE id= ${id}`);
    console.log(user.name)
    res.json(user);
})

// Borrar
app.delete("/delete-user", async (req, res) =>{
    const user = req.body;
    const id= user.id;
    const nombre_usuario=user.nombre_usuario;
    const rol=user.rol;
    const estado=user.estado;
    const correo=user.correo;
    await connection.execute(`DELETE FROM rocky WHERE id = ${id} `);
    console.log(user.name)
    res.json(user);
})




app.listen(port, async () => {
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'rocky',
        Promise:bluebird
      });
    console.log("Server runing on port:" + port)
});