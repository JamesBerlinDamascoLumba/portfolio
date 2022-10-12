import './ImprovementJourney.css';

import { useState } from 'react';

const ImprovementJourney = () => {
    const [body, setBody] = useState([
        { display: null }
    ]);

    const creationBtnClicked = (id) => {
        if(body[0].display === null) {
            document.getElementById('Journey').getElementsByClassName('Creations')[0].classList.add(`${id}__active`);
            setBody([{display: id}]);
        } else {
            if(body[0].display === id) {
                document.getElementById(id).classList.add(`Creation-exit`);
                document.getElementById('Journey').getElementsByClassName('Creations')[0].classList.add(`${id}__deactive`);
                setTimeout(() => {
                    document.getElementById('Journey').getElementsByClassName('Creations')[0].classList.remove(`${id}__active`);
                    document.getElementById('Journey').getElementsByClassName('Creations')[0].classList.remove(`${id}__deactive`);
                    setBody([{display: null}]);
                }, 500);
                
            } else {
                document.getElementById(body[0].display).classList.add(`Creation-exit`);
                document.getElementById('Journey').getElementsByClassName('Creations')[0].classList.add(`${body[0].display}__deactive`);
                setTimeout(() => {
                    document.getElementById('Journey').getElementsByClassName('Creations')[0].classList.remove(`${body[0].display}__active`);
                    document.getElementById('Journey').getElementsByClassName('Creations')[0].classList.remove(`${body[0].display}__deactive`);
                    document.getElementById('Journey').getElementsByClassName('Creations')[0].classList.add(`${id}__active`);
                    setBody([{display: id}]);
                }, 500);
            }
        }
    }

    return (
        <div className='Container' id='Journey'>
            <div className='Creations'>
                <div className='Creations__row'>
                    <button type='button' className='Creation__button' id='Creation1__button' onClick={() => creationBtnClicked('Creation1')}>Creation 1</button>
                    <button type='button' className='Creation__button' id='Creation2__button' onClick={() => creationBtnClicked('Creation2')}>Creation 2</button>
                </div>
                <div className='Creations__row'>
                    <button type='button' className='Creation__button' id='Creation3__button' onClick={() => creationBtnClicked('Creation3')}>Creation 3</button>
                    <button type='button' className='Creation__button' id='Creation4__button' onClick={() => creationBtnClicked('Creation4')}>Creation 4</button>
                </div>
                { body[0].display !== null && body[0].display === 'Creation1' ?
                    <section className='Creation' id='Creation1'>
                        <h2>Full Stack</h2>
                        <p>
                            <span className='Technology-used'>MongoDB</span>
                            <span className='Technology-used'>Express.js</span>
                            <span className='Technology-used'>Vue.js</span>
                            <span className='Technology-used'>Node.js</span>
                        </p>
                        <h3>Objective</h3>
                        <p>To start writing code on my own, and eventually create my first working web application.</p>
                        <h3>Result<a href='https://marketual.herokuapp.com/' target='_blank' rel='noreferrer' className='Result-arrow'></a></h3>
                        <p>App can be tested using a test email or non-existing email.</p>
                        <h3>Conclusion</h3>
                        <p>
                            My code implementation is not good. If it works, I move on. Though, I certainly did learn a lot. Like familiarities with css properties, and others.
                            Because of this, I became less dependent on researching how to do it that consumes a lot of time, which is fine because I also improved my skills
                            on trying to find answers to my questions.
                        </p>
                    </section>
                    : <></>
                }
                { body[0].display !== null && body[0].display === 'Creation2' ?
                    <section className='Creation' id='Creation2'>
                        <h2>Full Stack</h2>
                        <p>
                            <span className='Technology-used'>MongoDB</span>
                            <span className='Technology-used'>Express.js</span>
                            <span className='Technology-used'>React.js</span>
                            <span className='Technology-used'>Node.js</span>
                        </p>
                        <h3>Objective</h3>
                        <p>Create my second web application to apply what I learned from my first, and to also see how I absorbed it.</p>
                        <h3>Result<a href='https://marketual-react.herokuapp.com/' target='_blank' rel='noreferrer' className='Result-arrow'></a></h3>
                        <p>App can be tested using a test email or non-existing email.</p>
                        <h3>Conclusion</h3>
                        <p>
                            Knowing what to do a lot of times becomes a thing. Code implementation definitely improved.
                        </p>
                    </section>
                    : <></>
                }
                { body[0].display !== null && body[0].display === 'Creation3' ?
                    <section className='Creation' id='Creation3'>
                        <h2>Front-End</h2>
                        <p>
                            <span className='Technology-used'>HTML</span>
                            <span className='Technology-used'>CSS</span>
                            <span className='Technology-used'>JavaScipt</span>
                            <span className='Technology-used'>React.js</span>
                        </p>
                        <h3>Objective</h3>
                        <p>Job interview test. Translate a UI Design to Code.</p>
                        <h3>Result<a href='https://github.com/JamesBerlinDamascoLumba/questronix-exam' target='_blank' rel='noreferrer' className='Result-arrow'></a></h3>
                        <h3>Conclusion</h3>
                        <p>
                            Difficulty trying to come up with an idea how the UI Design could work together with the API.
                        </p>
                    </section>
                    : <></>
                }
                { body[0].display !== null && body[0].display === 'Creation4' ?
                    <section className='Creation' id='Creation4'>
                        <h2>Front-End</h2>
                        <p>
                            <span className='Technology-used'>HTML</span>
                            <span className='Technology-used'>CSS</span>
                            <span className='Technology-used'>JavaScipt</span>
                            <span className='Technology-used'>React.js</span>
                        </p>
                        <h3>Objective</h3>
                        <p>
                            Translate a UI Design to code, and use it as a UI Design for my portfolio. This time, I'm creating this meticulously
                            by investigating why my code didn't work, and why it work to gain deeper understanding.
                        </p>
                        <h3>Result<a href='#' target='_blank' rel='noreferrer' className='Result-arrow'></a></h3>
                        <h3>Conclusion</h3>
                        <p>
                            Difficulty trying to come up with an idea of how the contents just like this that you are currently reading should look like, and behave.
                        </p>
                    </section>
                    : <></>
                }
            </div>
        </div>
    )
}

export default ImprovementJourney;