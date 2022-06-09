import React from 'react';
import Computerimage from '../images/computerImage.jpeg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHomeLg, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';
import Facebook from '../images/facebook.svg';
import Twitter from '../images/twitter.svg';
import LinkedIn from '../images/linkedin.png';
import Instagram from '../images/github.svg';
import Youtube from '../images/facebook.svg';


function Footer(){
    return(
        <div className='footer'>
            <div className='footerCover'>
                <div className='blog'>
                    <FontAwesomeIcon icon={faHomeLg} style={{color: '#fff'}}/>
                    <div className='blogFix'>
                        <p><a href="#">Blog</a></p>
                        <p><a href="#">Portfolio</a></p>
                    </div>
                </div>
                <div className='internshipProgram'>
                    <h3>Internship programs</h3>
                    <div className='internshipProgramCover'>
                        <div className='internship'>
                            <p><a href="#">How it works</a></p>
                            <p><a href="#">Sample sessions</a></p>
                            <p><a href="#">Certification</a></p>
                            <p><a href="#">Program guide</a></p>
                            <p><a href="#">Pricing</a></p>
                            <p><a href="#">Testimonials</a></p>
                            <p><a href="#">Our team</a></p>
                        </div>
                        <div className='internshipFaq'>
                            <p>FAQs</p>
                            <p>ENquire now</p>
                        </div>
                    </div>
                </div>
                <div className='freeCourse'>
                    <h3>Free courses</h3>
                    <div className='freeCourseText'>
                        <div>
                        <a>
                            <p>programming 101 - fundamentals</p>
                            <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='internshipIconAll'>
                <div className='internshipIcon'>
                    <img src={Facebook} alt="facebook_icon" />
                    <img src={Twitter} alt="twitter_icon" />
                    <img src={LinkedIn} alt="linkedin_icon" />
                    <img src={Instagram} alt="instagram_icon" />
                    <img src={Youtube} alt="youtube_icon" />
                </div>
                <p>Copyright 2021 © TopInterns.io</p>
            </div>
            
        </div>
    )
};


export default Footer;