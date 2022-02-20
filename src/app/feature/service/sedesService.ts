import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
     providedIn : 'root'
})

export class SedesService{
    public url: string;
    
    constructor (private http: HttpClient)
    {
       this.url= GLOBAL.url;
    } 

    obtenerSedes(): Observable<any> {
        return this.http.get(this.url+'/sedes/')
    } 
} 