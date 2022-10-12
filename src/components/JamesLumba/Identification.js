import React from 'react';
import './Identification.css';
import Me from './me.jpg';

const Identification = () => {
    return(
        <div className='Container' id='Identification'>
            <svg>
                <path
                    d='m 40 55 q -10 0 -20 20 q 10 -20 -10 -20 q -10 0 -10 -10 l 0 -35 q 0 -10 10 -10 l 105 0 q 10 0 10 10 l 0 35 q 0 10 -10 10 z'
                    fill='#515259'
                ></path>
                <text x='30' y='30' fill='#fdfcfd'>soon &#128578;</text>
            </svg>
            <img src={Me} alt="James Lumba 1x1" />
            <h4>James Berlin Damasco Lumba</h4>
            <p>lumba.james27@gmail.com</p>
        </div>
    )
}

export default Identification;