import { useSelector } from 'react-redux'
import '../components/style.css'

const Resumen = () => {
    const selector = useSelector(state => state)

    const datosRegistrados = Object.entries(selector)

    return(
        <div className='resumen'>
            <h1 className='resumen-title'>Resumen</h1>
            <div className='resumen-info'>
                <div className='container'>
                    <h2>Datos Básicos</h2>
                    <hr />
                    <div className='datos'>
                        <p className='resumen-text'>
                            <span>Nombre: </span>
                            <span>{selector.nombre}</span>
                        </p>
                        <p className='resumen-text'>
                            <span>Apellidos: </span>
                            <span>{selector.apellidos}</span>
                        </p>
                        <p className='resumen-text'>
                            <span>Correo: </span>
                            <span>{selector.correo}</span>
                        </p>
                        <p className='resumen-text'>
                            <span>Telefono: </span>
                            <span>{selector.telefono}</span>
                        </p>
                    </div>
                </div>

                <div className='container'>
                    <h2>Formación Académica</h2>
                    <hr />
                    <div className='datos'>
                        <p className='resumen-text'>
                            <span>Institución: </span>
                            <span>{selector.institucion}</span>
                        </p>
                        <p className='resumen-text'>
                            <span>Carrera: </span>
                            <span>{selector.carrera}</span>
                        </p>
                        <p className='resumen-text'>
                            <span>Fecha de inicio: </span>
                            <span>{selector.fechaInicioEducacion}</span>
                        </p>
                        <p className='resumen-text'>
                            <span>Fecha de finalización: </span>
                            <span>{selector.fechaFinEducacion}</span>
                        </p>
                    </div>
                </div>

                <div className='container'>
                    <h2>Experiencia Laboral</h2>
                    <hr />
                    <div className='datos'>
                        <p className='resumen-text'>
                            <span>Empresa: </span>
                            <span>{selector.empresa}</span>
                        </p>
                        <p className='resumen-text'>
                            <span>Puesto: </span>
                            <span>{selector.puesto}</span>
                        </p>
                        <p className='resumen-text'>
                            <span>Fecha de inicio: </span>
                            <span>{selector.fechaInicioEducacion}</span>
                        </p>
                        <p className='resumen-text'>
                            <span>Fecha de finalizacion: </span>
                            <span>{selector.fechaFinExperiencia}</span>
                        </p>
                    </div>
                </div>

                <div className='container'>
                    <h2>Biografia</h2>
                    <hr />
                    <div className='datos'>
                        <p className='resumen-text'>
                            <span>Biografia: </span>
                            <span>{selector.biografia}</span>
                        </p>
                    </div>
                </div>

                <div className='container'>
                    <h2>Datos Básicos</h2>
                    <hr />
                    <div className='datos'>
                        <p className='resumen-text'>
                            <span>Nombre #1: </span>
                            <span>{selector.nombre1}</span>
                        </p>
                        <p className='resumen-text'>
                            <span>Correo #1: </span>
                            <span>{selector.correo1}</span>
                        </p>
                        <p className='resumen-text'>
                            <span>Telefono #1: </span>
                            <span>{selector.telefono1}</span>
                        </p>
                        <p className='resumen-text'>
                            <span>Nombre #2: </span>
                            <span>{selector.nombre2}</span>
                        </p>
                        <p className='resumen-text'>
                            <span>Correo #2: </span>
                            <span>{selector.correo2}</span>
                        </p>
                        <p className='resumen-text'>
                            <span>Telefono #2: </span>
                            <span>{selector.telefono2}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resumen