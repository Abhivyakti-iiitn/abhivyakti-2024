import React from 'react'
import FormPageLeft from './FormPageLeft'
import Form from './Form'
import "../../newscss/formPage.scss"

const FormPage = () => {
  return (
    <div className='FormPage'>
        <FormPageLeft />
        <Form />
    </div>
  )
}

export default FormPage