import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Button } from 'react-bootstrap'
import Wizard from "../pages/Wizard"

const Paso2 = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const selector = useSelector(state => state)

    const validacionesPaso2 = Yup.object({
        institucion: Yup.string().required('La institución es requerida'),
        carrera: Yup.string().required('La carrera es requerida'),
        fechaInicioEducacion: Yup.date().required('La fecha de inicio es requerida'),
        fechaFinEducacion: Yup.date().required('La fecha de finalización es requerida')
        .min(Yup.ref('fechaInicioEducacion'), 'La fecha de fin debe ser posterior o igual a la fecha de inicio' ),
    })

    const formik = useFormik({
        initialValues: {
            institucion: selector.institucion,
            carrera: selector.carrera,
            fechaInicioEducacion: selector.fechaInicioEducacion,
            fechaFinEducacion: selector.fechaFinEducacion,
            paso2Completado: true
        },
        validationSchema: validacionesPaso2,
        onSubmit: (values) => {
            dispatch({ 
                type: 'AGREGAR_DATOS', 
                payload: values 
            });
            navigate('/paso3')
        }
    })

    return (
        <Wizard>
            <h2>Paso 2 - Formación Académica</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId='institucion'>
                    <Form.Label>Institución</Form.Label>
                    <Form.Control
                        name='institucion'
                        type='text'
                        value={formik.values.institucion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese la institución'
                        isInvalid={!!formik.errors.institucion && formik.touched.institucion}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.institucion}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='carrera'>
                    <Form.Label>Carrera</Form.Label>
                    <Form.Control
                        name='carrera'
                        type='text'
                        value={formik.values.carrera}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese la carrera'
                        isInvalid={!!formik.errors.carrera && formik.touched.carrera}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.carrera}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='fechaInicioEducacion'>
                    <Form.Label>Fecha de inicio</Form.Label>
                    <Form.Control
                        name='fechaInicioEducacion'
                        type='date'
                        value={formik.values.fechaInicioEducacion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese la fecha de inicio'
                        isInvalid={!!formik.errors.fechaInicioEducacion && formik.touched.fechaInicioEducacion}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.fechaInicioEducacion}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='.fechaFinEducacion'>
                    <Form.Label>Fecha de finalización</Form.Label>
                    <Form.Control
                        name='fechaFinEducacion'
                        type='date'
                        value={formik.values.fechaFinEducacion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese la fecha de finalizacion'
                        isInvalid={!!formik.errors.fechaFinEducacion && formik.touched.fechaFinEducacion}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.fechaFinEducacion}
                    </Form.Control.Feedback>
                </Form.Group>
                <div className='botones'>
                    <Button className='boton-ant' onClick={() => navigate('/paso1')}>Anterior</Button>
                    <Button className='boton-sig' type='submit'>Siguiente</Button>
                </div>
            </Form>
        </Wizard>
    )
}

export default Paso2