import React, { useContext, useState, useRef } from 'react';
import {useNavigate} from "react-router-dom";
import { Mun, Admads, Roadtoredcarpet } from ".";
import ShowStopper from './ShowStopper';
import BronxBattleground from "./BronxBattleground";
import RythmRumble from './RythmRumble';
import Groovegenesis from './GrooveGenesis';
import Stellarsingoff from './StellarSingOff';
import Rhymeriot from './Rhymeriot';
import "../../newscss/form.scss";
import "../../css/tooltip.css";
import Praanaant from './Praanaant';
import Andhkaar from './Andhkaar';
import Bahumukhi from './Bahumukhi';
import {toast} from "react-toastify";
import Modal from '../Modal';
import qr from "../../assets/qr.jpg"
import NewContext from '../../context/NewContext';




const Form = (props) => {

  const navigateTo = useNavigate();
  const [open, setOpen] = useState(false);

  const context = useContext(NewContext);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [formData, setFormData] = useState({payment_link:""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const formRef = useRef(null);

  // const [formData, setFormData] = useState({ });
  // const [answers, setAnswers] = useState({ });

  // const handleInputChange = (e) => {
  //   const {name, value} = e.target;
  //   setFormData({...formData, [name]: value });
  // };

  // const handleRadioChange = (questionId, value) => {
  //   setAnswers({...answers, [questionId]: value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await context.Register(props.name, formData, context.userData?.username, context.userData?.email, window.localStorage.getItem("access_token"));

    if(data.success)
    {
      toast.success("Application Sent!");
      navigateTo("/home");
    }else{
      toast.error("Application Failed!");
    }
    // console.log('Form Data:', formData);
    // console.log('Answers:', answers);
    // You can handle form submission logic here
    // console.log(formRef.current.organizations?.value)


  };

  let strArray = ["stellarsing-off", "rhymeriot", "groovegenesis"];

  const selector = (eventName) => {



    // console.log(organizations)
    switch (eventName) {
      case "modelunitednations":
        return <Mun onOpenModal={onOpenModal} onCloseModal={onCloseModal} />;
      case "roadtoredcarpet":
        return <Roadtoredcarpet />;
      case "admads":
        return <Admads onOpenModal={onOpenModal} onCloseModal={onCloseModal} handleChange={handleChange} />;
      case "showstopper":
        return <ShowStopper />
      case "bronxbattleground":
        return <BronxBattleground />
      case "rythmrumble":
        return <RythmRumble />
      case "groovegenesis":
        return <Groovegenesis />
      case "stellarsing-off":
        return <Stellarsingoff />
      case "rhymeriot":
        return <Rhymeriot />
      case "praanant":
        return <Praanaant />
      case "andhakaar":
        return <Andhkaar />
      case "bahumukhi":
        return <Bahumukhi />
      default:
        break;
    }

  }

  return (
    <div className={`formDiv ${strArray.includes(props.name) ? "" : "fixheight"}`}>
      <h1>Registration Form</h1>
      {/* <div onSubmit={handleSubmit} ref={formRef} className='form'> */}
      <div ref={formRef} className='form'>
        {selector(props.name)}
      </div>
      <Modal open={open} onClose={onCloseModal} handleChange={handleChange} formData={formData} handleSubmit={handleSubmit} center/>
    </div>
  );
};
export default Form






