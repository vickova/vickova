import React from 'react';
import PhaseOne from  './phase1';
import PhaseTwo from  './phase2';
import PhaseThree from  './phase3';
import PhaseFour from  './phase4';

function AfterFixfirst(){
    return(
        <div className='before'>
            <h2>Your journey to becoming a TopIntern</h2>
            <div className='phases'>
                <PhaseOne className='phase'/>
                <PhaseTwo className='phase'/>
                <PhaseThree className='phase'/>
                <PhaseFour className='phase'/>
            </div>
        </div>
    )
};

export default AfterFixfirst;