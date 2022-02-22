export class Asignaturas {
    constructor(
        public codigo: number,
        public nombre: string,
        public programas_codigo: number
    ) { }
}

export interface Asignatura {
    codigo: number,
    nombre: string,
    programas_codigo: number
}
