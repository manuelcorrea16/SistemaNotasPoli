import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import  'rxjs/add/operator/map';
import { GLOBAL } from './global';
import { Sedes } from '../models/Sedes';

@Injectable()
export class SedesService{
    public url: string;

    constructor (private _http: HttpClient){
        this.url= GLOBAL.url;
    }
     // este debe consumir el api de  '../Back/controllers/Sedes' ¿Como es lo que no he podido...
    obtenerSedes(): Sedes[] {
        return [
            { codigo: 1, nombre: 'Sede Medellín', cod_ciudad: 1 },
            { codigo: 2, nombre: 'Sede Bello', cod_ciudad: 12 },
            { codigo: 3, nombre: 'Sede Oriente ', cod_ciudad: 13 },
            { codigo: 4, nombre: 'Sede Apartadó', cod_ciudad: 11 }
          ]
    } 
} 