import React, {useContext, useState} from 'react'
import FormPageLeft from './FormPageLeft'
import Form from './Form'
import "../../newscss/formPage.scss"
import Footer from "../Footer"
import { useParams } from "react-router-dom";
import content from "../../assets/EventContent.json";

const FormPage = () => {
  const params = useParams();
  const evtName = params.eventname.toLowerCase().replace(/ /g, '').split('(')[0];
  return (
    <div className='formparent'>
      <div className='FormPage'>
        <div className='innerForm'>

          <FormPageLeft name={content[evtName].name} rules={content[evtName].rules} regulations={content[evtName].regulations} />
          <div className='lineVer'></div>
          <Form name={evtName} fees={content[evtName].fees}/>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default FormPage