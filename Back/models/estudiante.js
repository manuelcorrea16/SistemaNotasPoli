'use strict'
var mongoose = require ('mongiise');
var esquema = mongoose.Schema;

var estudianteEsquema = esquema({
    nombre: String,
    email: String,
    contacto: String,
    sede :{
        codigo : Number, 
        nombre : String
    }
});
module.exports = mongoose.model('Estudiante',estudianteEsquema);