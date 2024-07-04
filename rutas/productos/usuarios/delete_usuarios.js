const express= require ('express');
const router= express.Router ();
const promiseQuery= require ('../config/data_base');

// eliminar los usuarios
router.delete ('/delete', async (req, res) => {
    try {
        const { id }= req.params;
        const query= "delete from usuarios where id= ?";
        const usuario= await promiseQuery (query, id);
        res.json (usuario);
    } 
    catch (error) {
        throw error;
    }
});

module.exports= router;