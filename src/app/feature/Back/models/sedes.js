'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var SedeSchema = schema (
  {
    codigo:Number,
    nombre: String,
    cod_ciudad : Number
  }
);

module.exports= mongoose.model('Sede',SedeSchema);