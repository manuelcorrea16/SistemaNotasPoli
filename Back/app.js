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

//rutas base
app.use('/api',sedesRutas);


module.exports = app;
