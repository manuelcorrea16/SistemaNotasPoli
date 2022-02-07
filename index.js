//Para trabajr las conexiones
'use strict'
//var app = require('./app');

//Para intaciona la clase que permite la coexion a Postgress
const pool = require('pg');
//Realizo la conexion a la BD
const UrlConexion = 'postgres://deprsegw:PNne0NY0oipuuxzlHbJKvQiJM09-dU06@castor.db.elephantsql.com/deprsegw' 
const conexion = new pool.Client(UrlConexion);
conexion.connect(function(err) {
  if(err) {
    return console.error('No pudo Conectarse a postgres', err);
  }
  else
   return console.log('Conectado Exitosamente a Postgres');
});

//Método que me retorna todas las sedes
function getSedes (){
  conexion.query('select * from sedes', function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }
        var codigo = result.rows.map(codigo=>{return codigo.codigo});
        var nombre = result.rows.map( nombre=>{return nombre.nombre});
        const sedes = [];
        for (let step = 0; step < codigo.length; step++) {
          sedes.push(codigo[step] +' '+ nombre [step])
        }
        console.log(sedes)
  });
};

//Método que me retorna todas los progamas
function getProgramas () {
    conexion.query('select * from programas', function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }
        var codigo = result.rows.map(codigo=>{return codigo.codigo});
        var nombre = result.rows.map( nombre=>{return nombre.nombre});
        const programas = [];
        for (let step = 0; step < codigo.length; step++) {
          programas.push(codigo[step] +' '+ nombre [step])
        }
        console.log(programas);
      });
};

//Método que me retorna todas los progamas
function getAsignaturas(){
  conexion.query('select * from asignaturas', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      //console.log(result.rows);
      var codigo = result.rows.map(codigo=>{return codigo.codigo});
      var nombre = result.rows.map( nombre=>{return nombre.nombre});
      const asignaturas = [];
      for (let step = 0; step < codigo.length; step++) {
        asignaturas.push(codigo[step] +' '+ nombre [step])
      }
      console.log(asignaturas);
    });
};

//Método que me retorna todas los progamas
function terminarConexion(){
  conexion.query('select * from programas', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    conexion.end();
  });
};
getSedes();
getProgramas();
getAsignaturas();
terminarConexion();
//para conectarse a mongo
/* var mongoose = requiere('mongoose')
mongoose.connect('URL',(err,res)=>{
    if(err){
        throw err;
    }
    else{
        console.log('Conectado Exitosamente a Mongo')
    }
}); */

/*module.exports={
    getSedes
};*/