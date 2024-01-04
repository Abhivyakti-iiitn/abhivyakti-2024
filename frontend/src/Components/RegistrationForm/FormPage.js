import React from 'react'
import FormPageLeft from './FormPageLeft'
import Form from './Form'
import "../../newscss/formPage.scss"
import Footer from "../Footer"
import { useParams } from "react-router-dom";
import content from "../../assets/EventContent.json";
const FormPage = () => {
  const params = useParams();
  const evtName = params.eventname.toLowerCase().replace('-', '').replace(/ /g, '');
  return (
    <div>
    <div className='FormPage'>
        <FormPageLeft name = {content[evtName].name} rules={content[evtName].rules} regulations={content[evtName].regulations} />
        <div className='lineVer'></div>
        <Form name={evtName}   />
    </div>
    <Footer />
    </div>
  )
}

export default FormPage