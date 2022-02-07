import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MyTextInput, MySelect } from "../components";
import '../styles/styles.css'

export const FormikAbstraction = () => {

  return (
    <div>
      <h1> Formik Abstraction </h1>

      <Formik 
        initialValues={{ 
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={ ( values ) => {
          console.log(values)
        }}
        validationSchema={ 
          Yup.object({
            firstName: Yup.string()
                          .max( 15, 'Debe tener 15 caracteres o menos' )
                          .required('Requerido'),
            lastName: Yup.string()
                          .max( 10, 'Debe tener 10 carácteres o menos' )
                          .required('Requerido'),
            email: Yup.string()
                          .email( 'Email no tiene formato válido' ),
            terms: Yup.boolean()
                          .oneOf([true], 'Debe aceptar las condiciones'),
            jobType: Yup.string()
                          .required('Requerido')
                          .notOneOf([ 'it-jr' ], 'Esta opción no es permitida.')
          })
        }
      >
        {
          ( formik ) => (
            <Form>

              <MyTextInput 
                label="First Name" 
                name="firstName"
                placeholder="Abraham"
              />

              <MyTextInput 
                label="Last Name" 
                name="lastName"
                placeholder="Hdz"
              />

              <MyTextInput 
                label="Email" 
                name="john"
                type="email"
              />

              <MySelect label="jobType" name="jobType">
                <option value="">Pick Something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior"> IT Senior </option>
                <option value="it-jr"> IT Jr </option>
              </MySelect>

              <MyCheckbox label="Terms & Conditions" name="terms" />

              <button type='submit'> Submit </button>

            </Form>
          )
        }
      </Formik>

    </div>
  )
}

export default FormikAbstraction
