export class Grupos {
    constructor(
        public numero: number,
        public semestre: string,
        public asignaturas_codigo: number,
        public id_profesor: number
    ) { }
}

export interface Grupo {
     numero: number,
     semestre: string,
     asignaturas_codigo: number,
     id_profesor: number
}
