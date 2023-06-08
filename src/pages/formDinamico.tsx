import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik' // Estado para el formulario de Formik
import * as Yup from 'yup' // Validaciones de formulario
import { Form, Button } from 'react-bootstrap' // Componentes de boostrap para react.js

const FormDinamico = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const validacionesFormDinamico = Yup.object({
        campo1: Yup.string().required('Este campo es requerido'),
        campo2: Yup.string().required('Este campo es requerido'),
    })

    const formik = useFormik({
        initialValues: {
            verCampos: false,
            campo1: '',
            campo2: '',
        },
        validationSchema: validacionesFormDinamico,
        onSubmit: () => { console.log('hola') }
    })


    return (
        <div>
            <h1>Formulario dinámico</h1>
            <form onSubmit={ formik.handleSubmit() }>
                <div>
                    <Form.check
                        type='checkbox'
                        label='Ver campos'
                    />
                </div>
                { formik.values.verCampos ? (
                    <>
                        <div className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name='campo1'
                                type='text'
                                placeholder='Ingrese su nombre'
                                onChange={formik.handleChange}
                                value={formik.values.campo1}
                                isInvalid={!!formik.errors.campo1}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="mb-3">
                            <Form.Label>Razon Social</Form.Label>
                            <Form.Control
                                name='campo2'
                                type='text'
                                placeholder='Ingrese la razon social'
                                onChange={formik.handleChange}
                                value={formik.values.campo2}
                                isInvalid={!!formik.errors.campo2 && formik.touched.campo2}
                            />
                        </div>
                    </>
                )}

            <button type="submit">Hola</button>
            </form>
        </div>
    )
}

export default FormDinamico