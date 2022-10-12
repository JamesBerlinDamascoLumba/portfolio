import './Navigation.css';
import { GiBookshelf, GiJourney } from 'react-icons/gi';
import { TbCrane } from 'react-icons/tb';
import { BsInfoLg, BsGithub } from 'react-icons/bs';

const Navigation = ({ onNavBtnClick }) => {
    return (
        <div className='Container' id='Navigation-bar'>
            <nav className='Nav__Buttons'>
                <p id='Nav__Button1' onClick={() => onNavBtnClick('Nav__Button1')}>
                    <GiBookshelf className='Nav__Buttons-icon' />Technologies
                </p>
                <p id='Nav__Button2' onClick={() => onNavBtnClick('Nav__Button2')}>
                    <GiJourney className='Nav__Buttons-icon' />Improvement Journey
                </p>
                <p id='Nav__Button3' onClick={() => onNavBtnClick('Nav__Button3')}>
                    <TbCrane className='Nav__Buttons-icon' />Projects
                </p>
                <p id='Nav__Button4' onClick={() => onNavBtnClick('Nav__Button4')}>
                    <BsInfoLg className='Nav__Buttons-icon' />About
                </p>
            </nav>

            <div className='Footer'>
                <div><a href='https://github.com/JamesBerlinDamascoLumba' target='_blank' rel='noreferrer' className='Icon-link'><BsGithub className='Icon' /></a></div>
                <a href='https://dribbble.com/shots/19157769-Office-Control-App' target='_blank' rel='noreferrer' className='Text-link'>UI Reference</a>
            </div>
        </div>
    )
}

export default Navigation;