const express= require ('express');
const router= express.Router ();
const promiseQuery= require ('../config/data_base');

router.put ('/', async (req, res) => {
    try {
        const { id }= req.params;
        const { nombre, apellido, gmail, contraseña}= req.body;
        const query= "update productos set nombre=?, apellido=?, gmail=?, contraseña=? where id=?"
    } 
    catch (error) {
        throw error;
    }
});

module.exports= router;