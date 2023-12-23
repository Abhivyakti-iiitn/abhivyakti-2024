import '../../css/event.css';
import Head from './Head'
import Name from './Name'
import Club from './Club'
import Timeline from './Timeline'
import Faq from './Faq'
import EventContent from './EventContent';
import Prize from './Prize';
import Contact from './Contact';
import FAQ from './Faq';
import content from '../../assets/EventContent.json';
import Header from './Header';
import {useParams} from "react-router-dom";
import Footer from './Footer';

// const content={name:"showstopper", details:"Join us for a dance journey where every step is a brushstroke on the canvas of your soul, where the stage is your sanctuary of expression, and where you dance not just with your body, but with your heart and spirit. Don't miss this opportunity to shine and be part of the vibrant cultural tapestry of \"Abhivyakti.\"", timeline:["15/01/24", "4/02/24", "10/02/24", "10/02/24", "15/02/24"], rules:"", regulations:"chipi chipi chapa chapa dubi dubi daba daba",registrationDate:"15/1/24",Team:"4",fees:"10 Rs",pool:"69 Cr"}

function Event() {
    const params = useParams();
    console.log(params);
    console.log(content);
    return (
        <div className='container'>
            <Header event = {content[params.eventname]}/>
            {/* <Head/>
            <Name/>
            <Club/>
            <Timeline/>
            <Faq/> */}
            <EventContent content={content[params.eventname]} />
            <Faq />
            <Contact />
            <Footer/>
            
        </div>
    );
}

export default Event;
