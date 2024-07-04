const mysql= require ('mysql');
const { promisify }= require ("util");

const data_base= mysql.createPool ({
    host: "",
    user: "root",
    password: "",
    database: "data_base",
    // limitacion de las conexiones en simultaneo
    connectionLimit: 5,
});

const promiseQuery= promisify (data_base.query).bind (data_base);

data_base.getConnection ((error, connection) => {
    if (error){
        throw error;
    }
    else {
        console.log ("conectado");

        // creacion de la tabla usuarios
        connection.query (
            "create table if not exists usuarios (id int not null auto_increment, nombre varchar (100) not null, apellido varchar (100) not null, gmail varchar (100) not null, contraseña varchar (100) not null, primary key (id))"
        )

        // creacion de la tabla productos 
        connection.query (
            "create table if not exists productos (id int not null auto_increment, nombre varchar (100) not null, precio int not null, stock int not null, primary key (id))"
        )
    }
});

module.exports= promiseQuery;