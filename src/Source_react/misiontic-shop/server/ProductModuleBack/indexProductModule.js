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

// Asigancion de puerto para heroku
app.set('port', process.env.PORT || port)
// Endpoint de prueba para funcionamiento local 
app.get("/", (req,res) => {
    res.json("Backend misiontic");
})

//Buscar producto
app.get("/get-products", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM registro_productos")
    console.log(rows);
    console.log(fields);
    console.log({data:rows});
    response.json({data:rows});

})
//test
//Agregar
app.post("/add-products", async (req,res) => {
    /* const [id, nombreproducto,tipoproducto,fabricante, precio, cantidad, fecha] = req.body; */
    const product = req.body;
    const id = product.id;
    const nombre_producto = product.nombre_producto;
    const tipo_producto = product.tipo_producto;
    const fabricante = product.fabricante;
    const precio = product.precio;
    const cantidad = product.cantidad;
    const fecha = product.fecha;
    await connection.execute(`INSERT INTO registro_productos (id, nombre_producto, tipo_producto, fabricante, precio, cantidad, fecha) VALUES( ${id},'${nombre_producto}','${tipo_producto}','${fabricante}',${precio},${cantidad},'${fecha}') `);
    res.json(product);
})

//Actualizar
app.put("/update-product", (req,res) => {
    const product = req.body;
    console.log(product.name)
    res.json(product);
})

//Borrar
app.delete("/delete-product", async (req,res) => {
    const product = req.body;
    const id = product.id;
    await connection.execute(`DELETE FROM registro_productos WHERE id = ${id} `)
    console.log(product.name)
    res.json(product);
})

app.listen(app.get('port'), async () => {
    /* connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'rocky',
        Promise:bluebird
      }); */
    console.log("Server runing on port:" + app.get('port'))
});










/* 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'rocky'
});

app.post('/registro', (req, res) => {
    console.log(req.body);
    const id = req.body.id
    const nombreproducto = req.body.nombreproducto;
    const tipoproducto = req.body.tipoproducto;
    const fabricante = req.body.fabricante;
    const precio = req.body.precio;
    const cantidad = req.body.cantidad;
    const fecha = req.body.fecha;

    db.query('INSERT INTO registro_productos (id, nombreproducto,tipoproducto, fabricante, precio, cantidad, fecha) VALUES(?,?,?,?,?,?,?)', [id, nombreproducto, tipoproducto, fabricante, precio, cantidad, fecha], (err,result) =>{
        if (err){
            console.log(err)
        } else {
            res.send("Values Inserted")
        }
    }
    );

}); */



