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

//Método que me retorna todas las sedes
function getSedes () {
    conexion.query('select * from sedes', function(err, result) {
          if(err) {
            return console.error('error running query', err);
          }
          var sedes =  result.rows;
          console.log(sedes);
          conexion.end();
    });
  };
  getSedes();

 