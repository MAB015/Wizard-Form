import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik' // Estado para el formulario de Formik
import * as Yup from 'yup' // Validaciones de formulario
import { Form, Button } from 'react-bootstrap' // Componentes de boostrap para react.js
import Wizard from '../pages/Wizard'
import { IPaso1 } from '../Interfaces/IPasosInformation'

const Paso1 = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const selector = useSelector( state => state)

    const validacionesPaso1 = Yup.object({
        nombre: Yup.string().required('El nombre es requerido'),
        apellidos: Yup.string().required('Los apellidos son requeridos'),
        correo: Yup.string().email('El correo es invalido').required('El email es requerido'),
        telefono: Yup.number().required('El telefóno es requerido')
    })

    const formik = useFormik({
        initialValues: {
            nombre: selector.nombre,
            apellidos: selector.apellidos,
            correo: selector.correo,
            telefono: selector.telefono,
            paso1Completado: true
        },
        validationSchema: validacionesPaso1,
        onSubmit: (values) => {
            dispatch({ 
                type: 'AGREGAR_DATOS', 
                payload: values 
            });
            navigate('/paso2');
        }
    })


    return (
        <Wizard>
            <h2>Paso 1 - Datos Básicos</h2>
            <Form className='formInfo' onSubmit={formik.handleSubmit}>
                <Form.Group controlId='nombre'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        name='nombre'
                        type='text'
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese su nombre'
                        isInvalid={!!formik.errors.nombre && formik.touched.nombre}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.nombre}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="apellidos">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        name='apellidos'
                        type='text'
                        value={formik.values.apellidos}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese sus apellidos'
                        isInvalid={!!formik.errors.apellidos && formik.touched.apellidos}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.apellidos}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="correo">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        name='correo'
                        type='email'
                        value={formik.values.correo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese su email'
                        isInvalid={!!formik.errors.correo && formik.touched.correo}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.correo}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="telefono">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        name='telefono'
                        type='number'
                        value={formik.values.telefono}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese su telefono'
                        isInvalid={!!formik.errors.telefono && formik.touched.telefono}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.telefono}
                    </Form.Control.Feedback>
                </Form.Group>
                <div className='botones'>
                    <Button className='boton-sig' type='submit'>Siguiente</Button>
                </div>
            </Form>
        </Wizard>
    )
}

export default Paso1