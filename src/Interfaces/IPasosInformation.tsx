export interface IPaso1 {
    nombre: string,
    apellidos: string,
    correo: string,
    telefono: number,
    paso1Completado: boolean,
}

export interface IPaso2 {
    institucion: string,
    carrera: string,
    fechaInicioEducacion: Date,
    fechaFinEducacion: Date,
    paso2Completado: boolean,
}

export interface IPaso3 {
    empresa: string,
    puesto: string,
    fechaInicioExperiencia: Date,
    fechaFinExperiencia: Date,
    paso3Completado: boolean,
}

export interface IPaso4 {
    biografia: string,
    paso4Completado: boolean,
}

export interface IPaso5 {
    nombre1: string,
    correo1: string,
    telefono1: number,
    nombre2: string,
    correo2: string,
    telefono2: number,
    paso5Completado: boolean,
}