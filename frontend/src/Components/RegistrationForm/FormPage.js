import React from 'react'
import FormPageLeft from './FormPageLeft'
import Form from './Form'
import "../../newscss/formPage.scss"
import Footer from "../Footer"
const FormPage = () => {
  return (
    <div>
    <div className='FormPage'>
        <FormPageLeft />
        <Form />
    </div>
    <Footer />
    </div>
  )
}

export default FormPage