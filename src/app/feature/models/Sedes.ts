export class Sedes {
    constructor(
        public codigo: number,
        public nombre: string,
        public cod_ciudad: number
    ) { }
}

export interface Sede {
    codigo: number,
    nombre: string,
    cod_ciudad: number
}