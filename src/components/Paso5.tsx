import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Button } from 'react-bootstrap'
import Wizard from "../pages/Wizard"

const Paso5 = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const selector = useSelector(state => state)

    const validacionesPaso5 = Yup.object({
        nombre1: Yup.string().required('El nombre del contacto #1 es requerido'),
        correo1: Yup.string().required('El correo del contacto #1 es requerido'),
        telefono1: Yup.number().required('El telefono del contacto #1 es requerido'),
        nombre2: Yup.string().required('El nombre del contacto #2 es requerido'),
        correo2: Yup.string().required('El correo del contacto #2 es requerido'),
        telefono2: Yup.number().required('El telefono del contacto #2 es requerido'),
    })

    const formik = useFormik({
        initialValues: {
            nombre1: selector.nombre1,
            correo1: selector.correo1,
            telefono1: selector.telefono1,
            nombre2: selector.nombre2,
            correo2: selector.apellido2,
            telefono2: selector.telefono2,
            paso5Completado: true
        },
        validationSchema: validacionesPaso5,
        onSubmit: (values) => {
            dispatch({ 
                type: 'AGREGAR_DATOS', 
                payload: values 
            });
            console.log(selector.pasosCompletados)
            navigate('/resumen')
        }
    })

    return (
        <Wizard>
            <h2>Paso 5 - Formación Académica</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId='nombre1'>
                    <Form.Label>Nombre #1</Form.Label>
                    <Form.Control
                        name='nombre1'
                        type='text'
                        value={formik.values.nombre1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese el nombre del contacto #1'
                        isInvalid={!!formik.errors.nombre1 && formik.touched.nombre1}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.nombre1}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='correo1'>
                    <Form.Label>Correo #1</Form.Label>
                    <Form.Control
                        name='correo1'
                        type='email'
                        value={formik.values.correo1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese el correo del contacto #1'
                        isInvalid={!!formik.errors.correo1 && formik.touched.correo1}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.correo1}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='telefono1'>
                    <Form.Label>Telefono #1</Form.Label>
                    <Form.Control
                        name='telefono1'
                        type='number'
                        value={formik.values.telefono1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese el número de telefono del contacto #1'
                        isInvalid={!!formik.errors.telefono1 && formik.touched.telefono1}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.telefono1}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='nombre2'>
                    <Form.Label>Nombre #2</Form.Label>
                    <Form.Control
                        name='nombre2'
                        type='text'
                        value={formik.values.nombre2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese el nombre del contacto #1'
                        isInvalid={!!formik.errors.nombre2 && formik.touched.nombre2}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.nombre2}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='correo2'>
                    <Form.Label>Correo #2</Form.Label>
                    <Form.Control
                        name='correo2'
                        type='email'
                        value={formik.values.correo2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese el correo del contacto #2'
                        isInvalid={!!formik.errors.correo2 && formik.touched.correo2}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.correo2}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='telefono2'>
                    <Form.Label>Telefono #2</Form.Label>
                    <Form.Control
                        name='telefono2'
                        type='number'
                        value={formik.values.telefono2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese el número de telefono del contacto #2'
                        isInvalid={!!formik.errors.telefono2 && formik.touched.telefono2}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.telefono2}
                    </Form.Control.Feedback>
                </Form.Group>
                <div className='botones'>
                    <Button className='boton-ant' onClick={() => navigate('/paso4')}>Anterior</Button>
                    <Button className='boton-sig' type='submit'>Siguiente</Button>
                </div>
            </Form>
        </Wizard>
    )
}

export default Paso5