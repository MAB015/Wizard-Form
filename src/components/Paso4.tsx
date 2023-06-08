import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Button } from 'react-bootstrap'
import Wizard from "../pages/Wizard"

const Paso4 = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const selector = useSelector(state => state)

    const validacionesPaso4 = Yup.object({
        biografia: Yup.string().required('La biografia es requerida')
    })

    const formik = useFormik({
        initialValues: {
            biografia: selector.biografia,
            paso4Completado: true
        },
        validationSchema: validacionesPaso4,
        onSubmit: (values) => {
            dispatch({ 
                type: 'AGREGAR_DATOS', 
                payload: values 
            });
            navigate('/paso5')
        }
    })

    return (
        <Wizard>
            <h2>Paso 4 - Biografia</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId='biografia'>
                    <Form.Label>Biografia</Form.Label>
                    <Form.Control
                        name='biografia'
                        as='textarea'
                        value={formik.values.biografia}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Ingrese su biografia'
                        isInvalid={!!formik.errors.biografia && formik.touched.biografia}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.biografia}
                    </Form.Control.Feedback>
                </Form.Group>
                <div className='botones'>
                    <Button className='boton-ant' onClick={() => navigate('/paso3')}>Anterior</Button>
                    <Button className='boton-sig' type='submit'>Siguiente</Button>
                </div>
            </Form>
        </Wizard>
    )
}

export default Paso4