const express= require ('express');
const app= express ();
const producto_ruta= require ('/rutas/productos');
const connect= require ('./config/data_base');

app.use ('/productos', productos_ruta);

app.get ('/', (req, res) => {
    res.send ("hola");
});

app.listen (3000, () => {
    console.log ("en funcionamiento");
})