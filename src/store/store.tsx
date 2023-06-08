import { configureStore } from "@reduxjs/toolkit";

const initialValue = {
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    institucion: '',
    carrera: '',
    fechaInicioEducacion: '',
    fechaFinEducacion: '',
    empresa: '',
    puesto: '',
    fechaInicioExperiencia: '',
    fechaFinExperiencia: '',
    biografia: '',
    nombre1: '',
    correo1: '',
    telefono1: '',
    nombre2: '',
    correo2: '',
    telefono2: '',
    pasosCompletados: {
        paso1Completado: false,
        paso2Completado: false,
        paso3Completado: false,
        paso4Completado: false,
        paso5Completado: false,
    }
}

const reducer = (state = initialValue, action ) => {
    switch (action.type) {
        case 'AGREGAR_DATOS':
            return { ...state, ...action.payload };
        default:
            return {};
    }
}

const store = configureStore({ reducer });

export default store