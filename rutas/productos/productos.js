const express= require ('express');
const router= express.Router ();
const promiseQuery= require ('../config/data_base');

router.get ('/', async (req, res) => {
    try {
        const query= "select * from productos";
        const productos= await promiseQuery (query);
        res.json (productos);
    } 
    catch (error) {
        throw error;
    }
});

router.get ('/:id', async (req, res) => {
    try {
        const { id }= req.params;
        const query= "select * from productos where id= ?";
        const productos= await promiseQuery (query, [id]);
        res.json (productos);        
    } 
    catch (error) {
        throw error;
    }
});

router.post ('/', async (req, res) => {
    try {
        const { nombre, precio, stock }= req.body;
        const query= "insert into productos (nombre, precio, stock) values (?, ?, ?)";
        const productos= await promiseQuery (query, [nombre, precio, stock]);
        res.json (productos);
    }
    catch (error){
        throw error;
    }
});

module.exports= router;