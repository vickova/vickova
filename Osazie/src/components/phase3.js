import React from 'react';
import phase3 from '../images/phase3.svg';
import Check from '../images/ic-check.svg'

function PhaseThree(){
    return(
        <div className='phase'>
            <div className='realIconCover'>
                <img src={phase3} alt="Todo_icon" className='realIcon'/>
                <p>Month 4 - 6</p>
            </div>
            <h2>Phase 3: Virtual internship with partnering company</h2>
            <div className='checks'>
                <img src={Check} alt="Check_icon" />
                <p>Projects and tasks set by client company</p>
            </div>
            <div className='checks'>
            <img src={Check} alt="Check_icon" />
                <p>Continued mentorship by the TopInterns faculty</p>
            </div>
        </div>
    )
};

export default PhaseThree;