import { FormEvent } from 'react'
import { useForm } from '../hooks/useForms'
import '../styles/styles.css'

export const RegisterPage = () => {

  const { 
    onChange, resetForm, isValidEmail,
    name, email, password1, password2
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  })

  const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
  }

  return (
    <div>
      <h1> Register Page </h1>

      <form noValidate onSubmit={ onSubmit }>
        <input 
          type="text" 
          name="text" 
          placeholder="name" 
          value={ name } 
          onChange={ onChange } 
          className={ `${ name.trim().length <= 0 && 'has-error' }`}
        />
        { name.trim().length <= 0 && <span> Este campo es necesario </span> }

        <input 
          type="email" 
          name="email" 
          placeholder="email" 
          value={ email } 
          onChange={ onChange }
        />
        { !isValidEmail( email ) && <span> Email no válido </span> }

        <input 
          type="password" 
          name="password" 
          placeholder="password" 
          value={ password1 } 
          onChange={ onChange }
        />
        { password1.trim().length <= 0 && <span> Este campo es necesario </span> }
        { password1.trim().length  < 6 && password1.trim().length <= 0 && <span> La contraseña tiene que tener 6 letras </span> }

        <input 
          type="password2" 
          name="password2" 
          placeholder="password2" 
          value={ password2 } 
          onChange={ onChange }
        />
        { password2.trim().length <= 0 && <span> Password no válido </span> }
        { password2.trim().length > 0 && password1 !== password2 && <span> Password no válido </span> }

        <button type='submit'> Create </button>
        <button type='button' onClick={ resetForm }> Reset Form </button>
      </form>
    </div>
  )
}

export default RegisterPage
