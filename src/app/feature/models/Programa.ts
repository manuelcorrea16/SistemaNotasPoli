export class Programas{
   constructor(
        public codigo: number,
        public nombre: string,
        public codigo_area : number
    ){ }
}
export interface Programa {
        codigo: number,
        nombre: string,
        codigo_area : number
 }