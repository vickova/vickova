import React from 'react';
import BeforeFix from './beforeFix';
import AfterFixfirst from './afterFixfirst';
import AfterFixsecond from './afterFixsecond';
import ProgramDown from './programdown';
import Testimonial from './Testimonial';
import Leadership from './leadership';
import Questions from './questions';
import Footer from './footer';





function Main(){
    return(
        <div className='mainContent'>
            <BeforeFix />
            <AfterFixfirst />
            <AfterFixsecond />
            <ProgramDown />
            <Testimonial />
            <Leadership/>
            <Questions/>
            <Footer />
            <div className='buttonCover'>
            <div className='button'>
                    <button className='firstbutton'>Apply now</button>
                    <button>Ask a question</button>
            </div>
            </div>
        </div>
    )
};

export default Main;