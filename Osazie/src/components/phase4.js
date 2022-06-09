import React from 'react';
import phase4 from '../images/phase4.svg';
import Check from '../images/ic-check.svg';

function PhaseFour(){
    return(
        <div className='phase'>
            <div className='realIconCover'>
                <img src={phase4} alt="Todo_icon" className='realIcon'/>
                <p>Month 7+</p>
            </div>
            <h2>Phase 4: You become a certified TopInterns grad</h2>
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

export default PhaseFour;