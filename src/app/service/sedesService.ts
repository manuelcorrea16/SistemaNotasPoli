import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import  'rxjs/add/operator/map';
//import { SedeSchema } from 'Back/models/sede';

import { GLOBAL } from './global';

@Injectable()
//Esto es una prueba debe retornar lo que retorne la consulta del js
export class SedesService{
    public url: string;

    constructor (private _http: HttpClient){
        this.url= GLOBAL.url;
    }

    signup()
    {
        return  'Hola mundo desde el servicio'
    }
    /* obtenerSedes(): SedeSchema[] {
        return [
            { codigo: 1, nombre: 'Sede Medellín', cod_ciudad: 1 },
            { codigo: 2, nombre: 'Sede Bello', cod_ciudad: 12 },
            { codigo: 3, nombre: 'Sede Oriente ', cod_ciudad: 13 },
            { codigo: 4, nombre: 'Sede Apartadó', cod_ciudad: 11 }
          ]
    } */
} 