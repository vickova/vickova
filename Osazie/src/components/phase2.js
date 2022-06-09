import React from 'react';
import phase2 from '../images/phase2.svg';
import Check from '../images/ic-check.svg';

function PhaseTwo(){
    return(
        <div className='phase'>
            <div className='realIconCover'>
                <img src={phase2} alt="Todo_icon" className='realIcon'/>
                <p>Month 1 - 3</p>
            </div>
            <h2>Phase 2: Bootcamp + virtual internship at TopInterns</h2>
            <div className='checks'>
                <img src={Check} alt="Check_icon" />
                <p>Build project for TopIntern live production environment</p>
            </div>
            <div className='checks'>
                <img src={Check} alt="Check_icon" />
                <p>Training on industry tech stack and professional skills</p>
            </div>

        </div>
    )
};

export default PhaseTwo;