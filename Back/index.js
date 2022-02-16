//Para trabajr las conexiones
'use strict'
//Para intaciona la clase que permite la coexion a Postgress
var pool = require('pg');

//Cargamos el fichero central desde donde se cargaran todas la rutas, y demas cficheros
var app = require('./app');

//asignamos peurto de escucha
var port= process.env.PORT || 3977;

//Realizo la conexion a la BD
var UrlConexion = 'postgres://deprsegw:PNne0NY0oipuuxzlHbJKvQiJM09-dU06@castor.db.elephantsql.com/deprsegw' 
var conexion = new pool.Client(UrlConexion);

conexion.connect(function(err) {
  if(err) {
    console.error('No pudo Conectarse a postgres', err);
  }
  else{
    console.log('Conectado Exitosamente a Postgres');
    app.listen(port,function(){
      console.log('Servidor de escuchando pro el puerto' + port)
    });
  }
});

