//logica de express, cargar librerias, llamar metodos, cargar ficheros, configurar cabeceras...
'use strict'
var express = require('express')
var bodyParser = require('body-parse');

//Cargamos el fichero de carga central
var app = express();

//Cargar Rutas
var sedesRutas= require('./routes/sedes')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configuracion de cabeceras http
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization,X-API-KEY,Origin, X-Requested-With, Content-Type,Accept,Access-Control-Alow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');

    next();
});

//rutas base
app.use('/api',sedesRutas);


module.exports = app;
