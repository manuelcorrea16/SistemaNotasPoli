import { Injectable } from "@angular/core";

@Injectable()
//Esto es una prueba debe retornar lo que retorne la consulta del js
export class postGresService{
    obtenerSedes(): string[]{
        return [
            '1 Sede Medellín',
            '2 Sede Bello',
            '3 Sede Oriente ',
            '4 Sede Apartadó']
    }
}