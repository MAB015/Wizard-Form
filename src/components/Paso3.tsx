import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Button } from 'react-bootstrap'
import Wizard from "../pages/Wizard"

const Paso3 = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const selector = useSelector(state => state)

    const validacionesPaso3 = Yup.object({
        empresa: Yup.string().required('La empresa es requerida'),
        puesto: Yup.string().required('El puesto es requerido'),
        fechaInicioExperiencia: Yup.date().required('La fecha de inicio es requerida'),
        fechaFinExperiencia: Yup.date().required('La fecha de finalización es requerida')
        .min(Yup.ref('fechaInicioExperiencia'), 'La fecha de fin debe ser posterior o igual a la fecha de inicio' ),
    })

    const formik = useFormik({
        initialValues: {
            empresa: selector.empresa,
            puesto: selector.puesto,
            fechaInicioExperiencia: selector.fechaInicioExperiencia,
            fechaFinExperiencia: selector.fechaFinExperiencia,
            paso3Completado: true
        },
        validationSchema: validacionesPaso3,
        onSubmit: (values) => {
            dispatch({ 
                type: 'AGREGAR_DATOS', 
                payload: values 
            });
            navigate('/paso4')
        }
    })

    return (
        <Wizard>
            <h2>Paso 3 - Experiencia Laboral</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId='empresa'>
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control
                        name='empresa'
                        type='text'
                        value={formik.values.empresa}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese el nombre de la empresa en que labora'
                        isInvalid={!!formik.errors.empresa && formik.touched.empresa}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.empresa}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='puesto'>
                    <Form.Label>Puesto</Form.Label>
                    <Form.Control
                        name='puesto'
                        type='text'
                        value={formik.values.puesto}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese el puesto al que pertenece'
                        isInvalid={!!formik.errors.puesto && formik.touched.puesto}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.puesto}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='fechaInicioExperiencia'>
                    <Form.Label>Fecha de inicio</Form.Label>
                    <Form.Control
                        name='fechaInicioExperiencia'
                        type='date'
                        value={formik.values.fechaInicioExperiencia}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese la fecha de inicio'
                        isInvalid={!!formik.errors.fechaInicioExperiencia && formik.touched.fechaInicioExperiencia}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.fechaInicioExperiencia}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='.fechaFinExperiencia'>
                    <Form.Label>.fecha de finalización</Form.Label>
                    <Form.Control
                        name='fechaFinExperiencia'
                        type='date'
                        value={formik.values.fechaFinExperiencia}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese la fecha de finalizacion'
                        isInvalid={!!formik.errors.fechaFinExperiencia && formik.touched.fechaFinExperiencia}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.fechaFinExperiencia}
                    </Form.Control.Feedback>
                </Form.Group>
                <div className='botones'>
                    <Button className='boton-ant' onClick={() => navigate('/paso2')}>Anterior</Button>
                    <Button className='boton-sig' type='submit'>Siguiente</Button>
                </div>
            </Form>
        </Wizard>
    )
}

export default Paso3