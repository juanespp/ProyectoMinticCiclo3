// Busca el elemento de formulario por el id en el html 
const taksForm = document.getElementById('task-form');

taksForm.addEventListener('submit', e =>{
    e.preventDefault();
    /* console.log('submiting') */

    const nombre = taksForm["nombreproducto"].value;
    const tipo = taksForm["tipoProducto"].value;
    const fabricante = taksForm["fabricante"].value;
    const precio = taksForm["precio"].value;
    const cantidad = taksForm["cantidad"].value;
    const fecha = taksForm["fecha"].value;

    console.log(nombre, tipo, fabricante, precio, cantidad, fecha)
})