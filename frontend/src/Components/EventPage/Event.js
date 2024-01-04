import '../../css/event.css';
import { useEffect } from 'react';
import Faq from './Faq'
import EventContent from './EventContent';
import Prize from './Prize';
import Contact from './Contact';
import content from '../../assets/EventContent.json';
import Header from './Header';
import { useParams } from "react-router-dom";
import Footer from './Footer';

// const content={name:"showstopper", details:"Join us for a dance journey where every step is a brushstroke on the canvas of your soul, where the stage is your sanctuary of expression, and where you dance not just with your body, but with your heart and spirit. Don't miss this opportunity to shine and be part of the vibrant cultural tapestry of \"Abhivyakti.\"", timeline:["15/01/24", "4/02/24", "10/02/24", "10/02/24", "15/02/24"], rules:"", regulations:"chipi chipi chapa chapa dubi dubi daba daba",registrationDate:"15/1/24",Team:"4",fees:"10 Rs",pool:"69 Cr"}

function Event() {

    function fx() {
        let header = document.querySelector(".event_header");
        let header2 = document.querySelector(".sticky_header");
        let comp = document.querySelector(".EventContent");
        // let leftcomp = document.querySelector(".sticky-content");
        let cont = document.querySelector(".container");
        if ((cont.scrollTop > header.clientHeight - (header.clientHeight * 20 / 100)) && (!header2.classList.contains('shown')) && (cont.scrollTop < header.clientHeight + comp.clientHeight - 450)) {

            // console.log(header.clientHeight - (header.clientHeight * 20 / 100))
            // console.log(header.classList)
            header2.classList.add("shown");
        } else if (((cont.scrollTop < header.clientHeight - (header.clientHeight * 20 / 100)) && (header2.classList.contains('shown'))) || ((cont.scrollTop > header.clientHeight + comp.clientHeight - 450) && (header2.classList.contains('shown')))) {

            header2.classList.remove("shown");
        }


        // document.querySelector(".container").classList.toggle("sticky");

    }

    useEffect(() => {

        const com = document.querySelector(".container");
        com.addEventListener("scroll", fx);

    }, [])


    const params = useParams();
    // console.log("ADS", params.eventname);
    
    
    let obj = content[params.eventname.toLowerCase()];
    if(params.eventname === "modelunitednations(mun)") {
        obj = content["mun"]
    }
    return (
        <div className='container'>
            <Header name={obj.name} tagline={obj.tagline} raw={params.eventname} clubName = {obj.clubName ? obj.clubName : "null"} />
            {/* <Head/>
            <Name/>
            <Club/>
            <Timeline/>
            <Faq/> */}
            <EventContent content={obj} />
            <div className="blur_portion">
            </div>
            <Prize name={params.eventname} prize = {obj.prize} addPrize = {obj.addPrize}  />
            <Faq />
            <Contact clubName = {obj.clubName ? obj.clubName : "null"}/>

            <Footer />

        </div>
    );
}

export default Event;
