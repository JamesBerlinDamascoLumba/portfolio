import './JamesLumba.css';

import Identification from './JamesLumba/Identification.js';
import Navigation from './JamesLumba/Navigation.js';
import Technologies from './JamesLumba/Technologies.js';
import ImprovementJourney from './JamesLumba/ImprovementJourney.js';
import About from './JamesLumba/About.js';

import { useState } from 'react';

const JamesLumba = () => {
    const [body, setBody] = useState([{
        display: null
    }]);

    const navBtnClicked = (id) => {
        if(id !== 'Nav__Button3') {
            if(body[0].display !== null) {
                if(body[0].display !== id) {
                    document.getElementById('Main-body').getElementsByClassName('Window')[0].classList.replace('Window___open', 'Window___close');
                    document.getElementById(body[0].display).classList.remove('Nav__Button-active');
                    document.getElementById(id).classList.add('Nav__Button-active');
                    setTimeout(() => setBody([{display: id}]), 500);
                    setTimeout(() => {
                        document.getElementById('Main-body').getElementsByClassName('Window')[0].classList.remove('Window___close');
                        document.getElementById('Main-body').getElementsByClassName('Window')[0].classList.add('Window___open');
                    }, 501);
                }
            } else {
                document.getElementById(id).classList.add('Nav__Button-active');
                setBody([{display: id}]);
                setTimeout(() => {
                    document.getElementById('Main-body').getElementsByClassName('Window')[0].classList.add('Window___open');
                }, 500);
            }
        } else {
            if(!document.getElementsByTagName('svg')[0].classList.contains('Thought-bubble__Soon')) {
                document.getElementsByTagName('svg')[0].classList.add('Thought-bubble__Soon');
                setTimeout(
                    () => document.getElementsByTagName('svg')[0].classList.remove('Thought-bubble__Soon'),
                    5000
                );
            }
        }
    }

    return (
        <div className='Container' id='James-lumba'>
            <div className='Container' id='Left-body'>
                <Identification thoughtMessage={'soon &#128578;'} />
                <Navigation onNavBtnClick={navBtnClicked} />
            </div>
            { body[0].display === null ?
                <></>
                :
                <div className='Container' id='Main-body'>
                    <div className='Window'>
                        { body[0].display==='Nav__Button1' ? <Technologies /> : <></> }
                        { body[0].display==='Nav__Button2' ? <ImprovementJourney /> : <></> }
                        { body[0].display==='Nav__Button4' ? <About /> : <></> }
                    </div>
                </div>
            }
        </div>
    )
}

export default JamesLumba;