import './About.css';

import Compaq from './compaq.jpg';
import RCToyCar from './RCToyCar.jpg';
import PrinterCable from './printerCable.jpg';
import GPU from './GPU.png';

import { useState } from 'react';

const About = () => {
    const [body, setBody] = useState([
        { display: null }
    ]);

    const yearClicked = (year) => {
        if(body[0].display === null) {
            document.getElementById(`${year}__Button`).classList.add('Year-Active');
            setBody([{display: year}]);
        } else {
            if(body[0].display !== year) {
                document.getElementById(`${body[0].display}__Button`).classList.remove('Year-Active');
                document.getElementById(`${year}__Button`).classList.add('Year-Active');
                setBody([{display: year}]);
            }
        }
    };

    return(
        <div className='Container' id='About'>
            <div className='Left-side'>
                <h4 id='Year-1999__Button'>1999<span onClick={() => yearClicked('Year-1999')} className='Year-button'></span><span className='Year-connector'></span></h4>
                <h4 id='Year-2000__Button'>2000<span onClick={() => yearClicked('Year-2000')} className='Year-button'></span><span className='Year-connector'></span></h4>
                <h4 id='Year-2001__Button'>2001<span onClick={() => yearClicked('Year-2001')} className='Year-button'></span><span className='Year-connector'></span></h4>
                <h4 id='Year-2004__Button'>2004<span onClick={() => yearClicked('Year-2004')} className='Year-button'></span><span className='Year-connector'></span></h4>
                <h4 id='Year-2009__Button'>2009<span onClick={() => yearClicked('Year-2009')} className='Year-button'></span><span className='Year-connector'></span></h4>
                <h4 id='Year-2015__Button'>2015<span onClick={() => yearClicked('Year-2015')} className='Year-button'></span><span className='Year-connector'></span></h4>
                <h4 id='Year-2020__Button'>2020<span onClick={() => yearClicked('Year-2020')} className='Year-button'></span><span className='Year-connector'></span></h4>
            </div>
            <div className='Right-side'>
                { body[0].display !== null && body[0].display === 'Year-1999' ?
                    <section id='Year-1999'>
                        <img src={Compaq} alt='Compaq' />
                        <p>My first experience using a computer brand Compaq.</p>
                    </section>
                    : <></>
                }
                { body[0].display !== null && body[0].display === 'Year-2000' ?
                    <section id='Year-2000'>
                        <img src={RCToyCar} alt='RC Toy Car' />
                        <p>
                            My father bought me a remote controlled toy car. When I pushed the lever on its remote, the toy car started moving forward.
                            Curiousity kicked in, and I started taking the toy car apart to see what's going on inside.
                        </p>
                    </section>
                    : <></>
                }
                { body[0].display !== null && body[0].display === 'Year-2001' ?
                    <section id='Year-2001'>
                        <img src={PrinterCable} alt='Printer Cable' />
                        <p>
                            Got a lot crazier, and ended up dissecting our Compaq computer too, and then managed to bring it back altogether.
                            Luckily the only damage is the broken pin from the cable of the printer. Unfortunately, I can't remember what type of cable was that.
                        </p>
                    </section>
                    : <></>
                }
                { body[0].display !== null && body[0].display === 'Year-2004' ?
                    <section id='Year-2004'>
                        <p>
                            Forced my father to buy me a remote controlled toy helicopter. Unfortunately, he wasn't able to buy me one since it's really expensive.
                            To my disappointment, I took the dc motor from my remote controlled toy car, and started building a toy helicopter. It flew then immediately crashed to the ground, 
                            it's more like a jump to me. But that was fun, even if it failed. Now, I already knew what I'm missing back then.
                        </p>
                    </section>
                    : <></>
                }
                { body[0].display !== null && body[0].display === 'Year-2009' ?
                    <section id='Year-2009'>
                        <img src={GPU} alt='NVIDIA 8400GSsuper' />
                        <p>
                            Got our new pc, and you guessed it right, ended up dissecting it as well. I've learned a lot about its parts this time. Later bought NVIDIA 8400GS Super 512MB GPU,
                            and installed it.
                        </p>
                    </section>
                    : <></>
                }
                { body[0].display !== null && body[0].display === 'Year-2015' ?
                    <section id='Year-2015'>
                        <p>Our PC Specs which was purchased on year 2009 is now outdated to this year's standard. So I decided to use my savings to buy my first laptop.</p>
                    </section> :
                    <></>
                }
                { body[0].display !== null && body[0].display === 'Year-2020' ?
                    <section id='Year-2020'>
                        <p>
                            Knowing I won't stand out with other applicants in Electronics Engineering role, I decided to pursue a role in Software Development instead,
                            by creating a portfolio which I believe will help me stand out with other applicants. I only needed a laptop and internet connection which I already have
                            so I started building a portfolio.
                        </p>
                    </section>
                    : <></>
                }
            </div>
        </div>
    )
}

export default About;