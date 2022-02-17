'use strict'
var mongoose = require ('mongiise');
var esquema = mongoose.Schema;

var notaEsquema = esquema({
    semestre: Number,
    asignatura: {
        codigo: Number,
        nombre: String
    },
    grupo: {
        numero: Number,
        codigo: String,
        profesor: String
    },
    metodologia: {
        evaluacion: [{
            tipo: String,
            nota: Number
        }]
    }
});
module.exports = mongoose.model('nota',notaEsquema);