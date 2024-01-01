import React from 'react'
import FormPageLeft from './FormPageLeft'
import Form from './Form'
import "../../newscss/formPage.scss"
import Footer from "../Footer"
import { useParams } from "react-router-dom";
import content from "../../assets/EventContent.json";
const FormPage = () => {
  const params = useParams();
  return (
    <div>
    <div className='FormPage'>
        <FormPageLeft name = {content[params.eventname].name} rules={content[params.eventname].rules} regulations={content[params.eventname].regulations} />
        <div className='lineVer'></div>
        <Form name={params.eventname}   />
    </div>
    <Footer />
    </div>
  )
}

export default FormPage