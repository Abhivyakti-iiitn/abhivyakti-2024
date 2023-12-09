import React from 'react';
import './timeline.css';
import e1 from './pic/E1.png'
import e2 from './pic/E2.png'
import mystery from './pic/mystery.png'

function Timeline() {
    return (
        <div>
            <div className='heading_t'>EVENT TIMELINE</div>
            <div className='contain1'>
                <div className='contain2'>
                    <div className='line5'></div>
                    <div className='contain3'>
                        <div className='contain4'>
                            <div className='c1'></div>
                            <div className='v1'></div>
                            <img src={e1} className='img1'></img>

                        </div>
                        <div className='contain5'>
                            <div className='c2'></div>
                            {/* <div className='v2'></div> */}
                            <img src={e2} className='img2'></img>
                        </div>
                    </div>
                </div>
                <div className='diag1'></div>
            </div>
            <div className='contain6'>
                <div className='guide'>
                    <div>Round 1 (Eliminator) </div>
                    <div>In this preliminary round, comedians will submit their recorded stand-up performances online. This serves as the eliminator, where your comedic creativity and talent will shine through the screen. Ensure that your submission embodies the theme and adheres to the rules, as it will determine your journey to the exciting final round. Get ready to bring the laughter to life in your quest for stardom at "Star-Pod.</div>
                    <div className='rules'>RULES</div>
                    <div>General Rules:</div>
                    <div>1.  Comedy acts should be performed in Hindi, English, or a bilingual format.</div>
                    <div>2. If selected for the final round, the same routine performed in the preliminary round may be delivered with slight alterations if desired.</div>
                    <div>3. The use of any audio devices, except for the venue's sound system, is strictly prohibited.</div>
                    <div>4. Comedians should adhere to the specified time limits for both preliminary and final rounds.</div>
                    <div>5. Multiple comedians from the same institution are welcome to participate.</div>
                    <div>6. Each comedian will perform individually.</div>
                    <div>7. Please provide the name of the comedian.</div>
                    <div>8. All performances must be original, and any content that is inappropriate, disrespectful, or offensive will not be tolerated.</div>
                    <div>9. Routines should be performed live and not pre-recorded.</div>
                </div>
                <img src={mystery} className='mysteryimg'></img>
            </div>
            <div className='register'>REGISTER</div>
            
            <div className='line7'></div>
        </div>
    );
}

export default Timeline;
