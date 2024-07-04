const express= require ('express');
const router= express.Router ();
const promiseQuery= require ('../config/data_base');

router.put ('/:id', async (req, res) => {
    try {
        const { id }= req.params;
        const { nombre, precio, stock}= req.body;
        const query= "update productos set nombre=?, precio=?, stock=? where id=?"
    } 
    catch (error) {
        throw error;
    }
});

module.exports= router;