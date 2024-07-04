const express= require ('express');
const router= express.Router ();
const promiseQuery= require ('../config/data_base');

// usuarios
// localhost:3000/usuarios/
router.get ('/', async (req, res) => {
    try {
        const query= "select * from usuarios";
        const usuarios= await promiseQuery (query);
        res.json (usuarios);
    } 
    catch (error) {
        throw error;
    }
});

router.get ("/:id", async (req, res) => {
    try {
        const id= req.params.id;
        const query= "select * from usuarios where id=?";
        const usuarios= await promiseQuery (query, [id]);
    } 
    catch (error) {
        throw error;
    }
});

router.post ('/', async (req, res) => {
    try {
        const {nombre, apellido, gmail, contraseña}= req.body
        const query= "insert into usuarios (nombre, apellido, gmail, contraseña) values (?, ?, ?, ?)";
        await promiseQuery (query, [nombre, apellido, gmail, contraseña]);
        res.json ({message: "usuarios ingresados"});
    } 
    catch (error) {
        throw error;
    }
});

module.exports= router;