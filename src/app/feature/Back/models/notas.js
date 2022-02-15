'use strict'
var mongoose = require ('mongiise');
var esquema = mongoose.Schema;

var notaEsquema = esquema({
    asignatura :{
        codigo : Number, 
        nombre : String
    },
    semestre:String,
    grupo :{
        numero : Number, 
        codigo : String,
        profesor : String
    },
    metodologia:undefined,
    evalucion:undefined 
});
module.exports = mongoose.model('nota',notaEsquema);