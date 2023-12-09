import '../../css/event.css';
import Head from './Head'
import Name from './Name'
import Club from './Club'
import Timeline from './Timeline'
import Faq from './Faq'
function Event() {
    return (
        <div className='container'>
            <Head/>
            <Name/>
            <Club/>
            <Timeline/>
            <Faq/>
        </div>
    );
}

export default Event;
