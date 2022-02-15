'use strict'

var express = require ('express');
var sedesController = require('../controllers/sedes');

var api =express.Router();

api.get ('/GetSedes',sedesController.getSedes);
    
module.exports = api;