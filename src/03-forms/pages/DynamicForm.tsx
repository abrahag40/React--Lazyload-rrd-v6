import { Formik, Form } from 'formik';
import { MySelect } from '../components';
import * as Yup from 'yup'
import MyTextInput from '../components/MyTextInput';
import formJson from "../data/custom-form.json";

const initialValues: { [x: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
  initialValues[ input.name ] = input.value;

  if ( !input.validations ) continue;

  let schema = Yup.string()

  for (const rule of input.validations) {
    if ( rule.type === 'required' ) {
      schema = schema.required('Este campo es requerido');
    }
    
    if ( rule.type === 'minLength' ) {
      schema = schema.min( (rule as any).value || 1, `Debes escribir mínimo de ${(rule as any).value} carácteres`);
    }
    
    if ( rule.type === 'email' ) {
      schema = schema.email('Revisa formato email');
    }
  }

  requiredFields[input.name] = schema

}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Forms</h1>

      <Formik 
        initialValues={ initialValues }
        onSubmit={ ( values ) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {
          formik => (
            <Form noValidate>
              {
                formJson.map(({ 
                  type, 
                  name, 
                  placeholder, 
                  label,
                  options
                }) => {
                  if ( type === 'input' || type === 'password' || type === 'email' ) {
                    return (
                      <MyTextInput
                        key={name}
                        name={name}
                        type={type as any}
                        label={label}
                        placeholder={placeholder}
                      />
                    )
                  }  else if ( type === 'select' ) {
                    return (
                      <MySelect
                        key={name}
                        name={name}
                        type={type as any}
                        label={label}
                      >
                        <option value="">Select an option</option>
                        {
                          options?.map(({ id, label }) => (
                            <option key={ id } value={ id }>{ label }</option>
                          ))
                        }
                      </MySelect>
                    )
                  }
                  throw new Error(`El type ${ type } no es soportado`)
                })
              }
              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default DynamicForm
