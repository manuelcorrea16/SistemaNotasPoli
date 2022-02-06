'use strict'

var express = requiere ('express');
var sedesController = require('../controllers/sedes');

var api =express.Router();

api.get ('/probando-controlador',sedesController.getSedes);
    
module.exports = api;