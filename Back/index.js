//Para trabajr las conexiones
'use strict'
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

//Método que me retorna todas los progamas
function getProgramas (ciudadsede) {
    conexion.query('select * from programas', function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }
        var programas = [];
        var codigo = result.rows.map(codigo=>{return codigo.codigo});
        var nombre = result.rows.map( nombre=>{return nombre.nombre});
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
      var asignaturas = [];
      for (let step = 0; step < codigo.length; step++) {
        asignaturas.push(codigo[step] +' '+ nombre [step])
      }
      console.log(asignaturas);
      conexion.end();
    });
};

getProgramas();
getAsignaturas();
terminarConexion();