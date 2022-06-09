import React from 'react';
import phase1 from '../images/phase1.svg';
import Check from '../images/ic-check.svg'

function PhaseOne(){
    return(
        <div className='phase'>
            <div className='realIconCover'>
            <img src={phase1} alt="Todo_icon" className='realIcon' />
            <p>Month 0</p>
            </div>
            <h2>Phase 1: Screening</h2>
            <div className='checks'>
                <img src={Check} alt="Check_icon" />
                <p>Online application</p>
            </div>
            <div className='checks'>
                <img src={Check} alt="Check_icon" />
                <p>Entrance test - programming basics and aptitude</p>
            </div>
            <div className='checks'>
                <img src={Check} alt="Check_icon" />
                <p>Entrance interview</p>
            </div>
        </div>
    )
};

export default PhaseOne;