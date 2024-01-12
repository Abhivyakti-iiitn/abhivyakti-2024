import React, { useContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
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
import { toast } from "react-toastify";
import Modal from '../Modal';
import qr from "../../assets/qr.jpg"
import NewContext from '../../context/NewContext';


const Form = (props) => {

  const navigateTo = useNavigate();
  const [open, setOpen] = useState(false);

  const [underProcess, setunderProcess] = useState(false)
  const context = useContext(NewContext);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [formData, setFormData] = useState({
  payment_link:"",
  payment_id:"",
  order_id:""
  });

  const handleChange = (e,paymentId,orderId) => {
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


  useEffect(() => {

    if (!window.localStorage.getItem("access_token")) {
      toast.error("You have to log in first before you can register for an event. !!", {
        toastId: "loginfirst"
      })

      setTimeout(() => {
        navigateTo("/signup")
      }, 1000);

    }
    else if (!context.userData && window.localStorage.getItem("access_token")) {
      const data = context.fetchUser(window.localStorage.getItem("access_token"));
      data.then(res => {
        context.userData = res.findUser;
      }).catch(error => {
        toast.info("backend error ! Failed to fetch user data !", {
          toastId: "info2",
        })
      })
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setunderProcess(true)

    const data = await context.Register(props.name, formData, context.userData?.username, context.userData?.email, window.localStorage.getItem("access_token"));

    if (data.success) {
      toast.success("Application Sent!");
      navigateTo("/home");
    } else {
      toast.error("Application Failed!");
      toast.error(data.msg);
    }
    // console.log('Form Data:', formData);
    // console.log('Answers:', answers);
    // You can handle form submission logic here
    // console.log(formRef.current.organizations?.value)

    setunderProcess(false)


  };

  let strArray = ["stellarsing-off", "rhymeriot", "groovegenesis"];

  const selector = (eventName) => {



    // console.log(organizations)
    switch (eventName) {
      case "modelunitednations":
        return <Mun onOpenModal={onOpenModal} onCloseModal={onCloseModal} handleChange={handleChange} formData={formData} />;
      case "roadtoredcarpet":
        return <Roadtoredcarpet onOpenModal={onOpenModal} onCloseModal={onCloseModal} handleChange={handleChange} formData={formData} />;
      case "admads":
        return <Admads onOpenModal={onOpenModal} onCloseModal={onCloseModal} handleChange={handleChange} formData={formData} />;
      case "showstopper":
        return <ShowStopper onOpenModal={onOpenModal} onCloseModal={onCloseModal} handleChange={handleChange} formData={formData} />;
      case "bronxbattleground":
        return <BronxBattleground onOpenModal={onOpenModal} onCloseModal={onCloseModal} handleChange={handleChange} formData={formData} />;
      case "rythmrumble":
        return <RythmRumble onOpenModal={onOpenModal} onCloseModal={onCloseModal} handleChange={handleChange} formData={formData} />;
      case "groovegenesis":
        return <Groovegenesis onOpenModal={onOpenModal} onCloseModal={onCloseModal} handleChange={handleChange} formData={formData} />;
      case "stellarsing-off":
        return <Stellarsingoff onOpenModal={onOpenModal} onCloseModal={onCloseModal} handleChange={handleChange} formData={formData} />;
      case "rhymeriot":
        return <Rhymeriot onOpenModal={onOpenModal} onCloseModal={onCloseModal} handleChange={handleChange} formData={formData} />;
      case "praanant":
        return <Praanaant onOpenModal={onOpenModal} onCloseModal={onCloseModal} handleChange={handleChange} formData={formData} />;
      case "andhakaar":
        return <Andhkaar onOpenModal={onOpenModal} onCloseModal={onCloseModal} handleChange={handleChange} formData={formData} />;
      case "bahumukhi":
        return <Bahumukhi onOpenModal={onOpenModal} onCloseModal={onCloseModal} handleChange={handleChange} formData={formData} />;
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
      <Modal open={open} onClose={onCloseModal} handleChange={handleChange}  handleSubmit={handleSubmit} underProcess= {underProcess} setFormData={setFormData} formData={formData} center/>
    </div>
  );
};
export default Form






