const express= require ('express');
const router= express.Router ();
const promiseQuery= require ('../config/data_base');

router.delete ('/:id', async (req, res) => {
    try {
        const { id }= req.params;
        const query= "delete from productos where id= ?";
        const productos= await promiseQuery (query, [id, nombre, precio, stock]);
        res.json (productos);
    } 
    catch (error) {
        throw error;
    }
});

module.exports= router;