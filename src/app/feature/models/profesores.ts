export class Profesores {
    constructor(
        public identificacion: string,
        public nombre: string,
        public apellidos: string,
        public email: string,
        public tipo_contratacion: string,
        public tipo_empleado: string,
        public cod_facultad: number,
        public codigo_sede: number,
        public lugar_nacimiento: number
    ) { }
}

export interface Profesor {
    identificacion: string,
    nombres: string,
    apellidos: string,
    email: string,
    tipo_contratacion: string,
    tipo_empleado: string,
    cod_facultad: number,
    codigo_sede: number,
    lugar_nacimiento: number
}
