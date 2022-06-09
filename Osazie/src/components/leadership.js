import React from 'react';
import Vicky from '../images/Vicky.png'

function Leadership(){
    return(
        <div className='leadership before'>
            <h2>Meet your faculty leadership team</h2>
            <div className='leadershipAll'>
                <div className='leadershipCover'>
                    <img src={Vicky} alt="Profile_image" />
                    <div className='realLeadership'>
                        <div className='title'>
                            <h3>Ameer Jawad</h3>
                            <p>Investing in young talent</p>
                            <p>Founder and student success manager</p>
                        </div>
                        <p>Excited to be leading this venture, committed to the development of young talent and investing in their future! 
                            TopInterns is a virtual internship program that provides tech companies with interns who are specially trained and mentored for their
                             production environment.
                        </p>
                        <a href="#">See full profile</a>
                    </div>
                </div>
                <div className='leadershipCover'>
                    <img src={Vicky} alt="Profile_image" />
                    <div className='realLeadership'>
                        <div className='title'>
                            <h3>Lijeesh Majeed</h3>
                            <p>CTO</p>
                            <p>Program co-ordinator - TopInterns</p>
                        </div>
                        <p>Lijeesh Majeed is an Entrepreneur, Technology, and Product leader with more than 15 years of industry experience. 
                            As a mentor and trainer in various fields, he helped more than half a dozen technology startup teams,
                            200+ young entrepreneurs and developers.
                        </p>
                        <a href="#">See full profile</a>
                    </div>
                </div>
                <div className='leadershipCover'>
                    <img src={Vicky} alt="Profile_image" />
                    <div className='realLeadership'>
                        <div className='title'>
                            <h3>Vimson Varghese</h3>
                            <p>Software engineer</p>
                            <p>Lead mentor - TopInterns</p>
                        </div>
                        <p>15+ years of experience in designing, developing, scaling solutions for web and mobile platforms in startups and agencies.
                            Now working as a Senior Software Engineer at Laimoon.com in Dubai, UAE.
                        </p>
                        <a href="#">See full profile</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Leadership;