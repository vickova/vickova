import React from 'react';
import Video from '../video/reactV.mp4';
import Floward from '../images/Floward.png';
import GrubTech from '../images/grubtech.svg';
import Souqalmal from '../images/Souqalmal.png';
import Laimoon from '../images/laimoon.jpeg';
import Sultana from '../images/Sulthana.svg';
import Demo from '../images/demo.png';
import Certificate from '../images/certificate.png';


// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {fa1} from '@fortawesome/free-solid-svg-icons';


function afterFixsecond(){
    return(
        <div className='afterFix before'>
            <h2>What you'll be doing</h2>
            <div className='videoCoverAll'>
                <div className='videoCover'>
                    <div className='realVideo'>
                        <video controls loop src={Video} type='video/mp4'></video>
                    </div>
                    <h3>Recorded lecture sessions</h3>
                    <p>You’ll have access to all the program content to watch and replay at your own convenience. Watch the sample videos, teaching our students the foundations of TailwindCSS.</p>
                </div>
                <div className='videoCover'>
                    <div className='realVideo'>
                        <video controls loop src={Video} type='video/mp4'></video>
                    </div>
                    <h3>Recorded lecture sessions</h3>
                    <p>You’ll engage with your instructor and batch members in a highly interactive session twice a week. Check out the video to see what goes on inside the classroom.</p>
                </div>
                <div className='videoCover'>
                    <div className='realVideo'>
                        <video controls loop src={Video} type='video/mp4'></video>
                    </div>
                    <h3>Recorded lecture sessions</h3>
                    <p>You’ll work with the engineering team to deliver on business requirements. Check out this footage of interns giving a demo of a project they built on the job.</p>
                </div>
            </div>
            <div>
                <div className='studentCover'>
                    <div className='realStudent buttons'>
                        <div><h2>Student projects</h2>
                        <p>You’ll work in teams to deliver projects and hackathons. Explore some of the great work our students have done.</p></div>
                        <button className='firstbutton'>Explore projects</button>
                    </div>
                    <div className='twitterImage'><img src={Demo} alt="Twitter_page" /></div>
                </div>
                <div className='certificateCover'>
                    <div className='certificateImage'><img src={Certificate} alt="certificate_image" /></div>
                    <div className='realCertificate'>
                        <h2>Certification</h2>
                        <p>You’ll be certified that you completed the program including your virtual internship, signed by TopInterns and by the company where you completed your internship.</p>
                    </div>
                </div>
            </div>

            <div className='buttons'>
                <button className='firstbutton'>Apply</button>
                <button>Ask a question</button>
            </div>

            <div className='program'>
                <h2>Program guide</h2>
                <div>
                    <div div className='programCover'>
                        <div className='figure'><p>1</p></div>
                        <div className='realProgram'>
                            <div>
                                <h3>Web technologies fundamentals</h3>
                                <p>Web technologies are in a constant state of flux. It’s impossible to predict which will fail, which will shine brightly then quickly fade away, and which have real longevity. Rapid innovation is what makes web app development so exciting, but shiny new things shouldn’t be pursued without a solid understanding of the underlying web platform.</p>
                                <p>Practical skills you will gain from working on this module</p>
                            </div>
                            <div className='skillSet'>
                                <div className='skillFlex'><p className='skills'>HTML5</p>
                                <p className='skills'>CSS3</p></div>
                                <p className='skills'>Javascript</p>
                                <p className='skills'>Web design foundation</p>
                                <p className='skills'>GIT + Github</p>
                            </div>
                        </div>
                    </div>
                    <div div className='programCover'>
                        <div className='figure'><p>2</p></div>
                        <div className='realProgram'>
                            <div>
                                <h3>JavaScript Web development with MERN stack</h3>
                                <p>Learn Modern JavaScript starting from fundamental concepts to all next-generation features required to build the front-end as well as back-end applications</p>
                                <p>Practical skills you will gain from working on this module</p>
                            </div>
                            <div className='skillSet'>
                                <div className='skillFlex'><p className='skills'>NodeJs</p>
                                <p className='skills'>Express</p></div>
                                <div className='skillFlex'><p className='skills'>TailwindCSS</p>
                                <p className='skills'>ReactJs</p></div>
                                <div className='skillFlex'><p className='skills'>Redux</p>
                                <p className='skills'>SQL Databases</p></div>
                                <p className='skills'>No SQL Databases</p>
                            </div>
                        </div>
                    </div>
                    <div div className='programCover'>
                        <div className='figure'><p>3</p></div>
                        <div className='realProgram'>
                            <div>
                                <h3>Cloud computing and deployment</h3>
                                <p>Amazon Web Services Solutions 
                                    Architect certification is rated as one of the 
                                    most popular and lucrative cloud certifications in IT globally.
                                    Serverless is a way to describe the services, practices, 
                                    and strategies that enable you to build more agile applications so 
                                    you can innovate and respond to change faster. With serverless computing, infrastructure management 
                                    tasks like capacity provisioning and patching are handled by AWS</p>
                                <p>Practical skills you will gain from working on this module</p>
                            </div>
                            <div className='skillSet'>
                                <p className='skills'>Cloud Computing</p>
                                <p className='skills'>Security Management in AWS</p>
                                <p className='skills'>Serverless framework</p>
                                <p className='skills'>AWS Lambda</p>
                                <p className='skills'>AWS Route 53</p>
                                <p className='skills'>AWS CloudFront</p>
                                <div className='skillFlex'><p className='skills'>AWS CodePipeline</p>
                                <p className='skills'>CI/CD</p></div>
                            </div>
                        </div>
                    </div>
                    <div div className='programCover'>
                        <div className='figure'><p>4</p></div>
                        <div className='realProgram'>
                            <div>
                                <h3>Career guidance for web development</h3>
                                <p>The world of web development includes a whole range of specializations. Learn the subtle differences to guide your studies, and your job search.</p>
                                <p>Practical skills you will gain from working on this module</p>
                            </div>
                            <div className='skillSet'>
                                <p className='skills'>Full stack web devloper</p>
                                <p className='skills'>Front End Engineer</p>
                                <p className='skills'>Back End Engineer</p>
                                <p className='skills'>Softare Architect</p>
                                <p className='skills'>Preparing for interviews</p>
                                <p className='skills'>Building your profile</p>
                            </div>
                        </div>
                    </div>
                    <div div className='programCover'>
                        <div className='figure'><p>5</p></div>
                        <div className='realProgram'>
                            <div>
                                <h3>Practical workshops and group projects</h3>
                                <p>Work like a professional on some industry level projects like Chat app, Twitter clone, YouTube clone and pass the final exam.</p>
                                <p>Practical skills you will gain from working on this module</p>
                            </div>
                            <div className='skillSet'>
                                <p className='skills'>Team collaboration</p>
                                <p className='skills'>Technical architecture</p>
                                <p className='skills'>Product development</p>
                            </div>
                        </div>
                    </div>
                    <div className='programCover'>
                        <div className='last'><p>6</p></div>
                        <div className='realProgram'>
                            <div>
                                <h3>Virtual internship with one of our partnering high-growth tech companies - 3 months</h3>
                                <div className='programImages'>
                                    <img src={Floward} alt="Floward_icon" className='iconImage'/>
                                    <img src={GrubTech} alt="grubtech_icon" className='iconImage'/>
                                    <img src={Souqalmal} alt="souqalmal_icon" className='iconImage'/>
                                    <img src={Laimoon} alt="laimoon_icon" className='iconImage'/>
                                    <img src={Sultana} alt="sultana_icon" className='iconImage'/>
                                </div>
                                <p> <b>Timing :</b> Full time with up to 40 hours/week commitment.</p>
                                <p><b>Practical skills you will gain from working on this module</b></p>
                            </div>
                            <div className='lastSkills'>
                                <p className='skills'>Team work</p>
                                <p className='skills'>Real work experience</p>
                                <p className='skills'>Handle real customer data</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default afterFixsecond;

