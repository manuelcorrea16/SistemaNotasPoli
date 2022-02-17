export interface Estudiante {
    nombre: String,
    email: String,
    password: String,
    contacto: {
        redSocial: [{
            red: String,
            usuario: String
        }]
    },
    programa: String,
    sede: {
        codigo: Number,
        nombre: String
    }
}