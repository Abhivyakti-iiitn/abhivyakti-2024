import '../../css/event.css';
import Head from './Head'
import Name from './Name'
import Club from './Club'
import Timeline from './Timeline'
import Faq from './Faq'
import EventContent from './EventContent';

const content={name:"showstopper", details:"Join us for a dance journey where every step is a brushstroke on the canvas of your soul, where the stage is your sanctuary of expression, and where you dance not just with your body, but with your heart and spirit. Don't miss this opportunity to shine and be part of the vibrant cultural tapestry of \"Abhivyakti.\"", timeline:["15/1/24", "4/2/24", "10/2/24", "10/2/24", "15/2/24"], rules:"", regulations:"chipi chipi chapa chapa dubi dubi daba daba"}

function Event() {
    return (
        <div className='container'>
            {/* <Head/>
            <Name/>
            <Club/>
            <Timeline/>
            <Faq/> */}
            <EventContent content={content} />
        </div>
    );
}

export default Event;
