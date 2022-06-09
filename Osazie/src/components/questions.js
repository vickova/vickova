import React from 'react';

function Questions(){
    return(
        <div className='questionAll before'>
            <h2>Frequently Asked Questions</h2>
            <div>
                <div className='questionCover'>
                    <div className='question'>
                        <p>How long is the internship?</p>
                        <p>+</p>
                    </div>
                    <div className='answer'>
                        <p>-It depends on your performance. If you qualify through the assessment during the Bootcamp phase, 
                        you will qualify for a 2 month unpaid internship. Depending on your performance during those 2 months, 
                        the team may offer to extend your internship for another 2 months or more with a salary
                        </p>
                    </div>
                </div>
                <div className='questionCover'>
                    <div className='question'>
                    <p>What is the eligibility criteria for entry?</p>
                    <p>+</p>
                    </div>
                    <div className='answer'>
                        <p>- You must be 17 years of age or older</p>
                        <p>- You require knowledge on the foundations of coding</p>
                        <p>- You must be ready to commit up 40 hours per week for the full program</p>
                    </div>
                </div>
                <div className='questionCover'>
                    <div className='question'>
                    <p>What will I actually do during the internship?</p>
                    <p>+</p>
                    </div>
                    <div className='answer'>
                        <p>You will be working alongside the engineering team of the company where you are interning, 
                            delivering a real project based on their business needs.</p>
                    </div>
                </div>
               <div className='questionCover'>
                   <div className='question'>
                   <p>How will I benefit from doing the internship?</p>
                   <p>+</p>
                   </div>
                   <div className='answer'>
                       <p>You will gain confidence applying industry skills in a real work environment. 
                           The work experience will allow you to upgrade your CV, and become the focal point of interviews with future employers. Laimoon or 
                           the partner tech firm where you will be interning will also offer to provide you with a letter of recommendation or reference if you need one.</p>
                   </div>
                </div>
                <div className='questionCover'>
                    <div className='question'>
                    <p>Will I get paid during the internship?</p>
                    <p>+</p>
                    </div>
                    <div className='answer'>
                        <p>The first 2 months are unpaid, where you will get the initial on-the-job experience you need to give your future employment prospects a tremendous boost.
                             If you get an offer for an extension, it may be paid and the amount will be subject to the offer by the partnering company.</p>
                    </div>
                </div>
                <div className='questionCover'>
                    <div className='question'>
                    <p>What is the internship qualification criteria?</p>
                    <p>+</p>
                    </div>
                    <div className='answer'>
                        <p>At the Bootcamp, you will be completing 16 assignments, 3 group projects including a hackathon and a final examination. 
                            All these will be scored, where you have to attain 90% or more to qualify for an interview. 
                            If you do well at the interview, you will be offered a position for the internship.</p>
                    </div>
                </div>
                <div className='questionCover'>
                    <div className='question'>
                    <p>Can I get hired after the internship?</p>
                    <p>+</p>
                    </div>
                    <div className='answer'>
                        <p>Real work experience is the most important achievement that employers look for in a candidate. 
                            The internship will give you that required experience and will certainly boost your chances of getting a job. 
                            If the company where you are interning has a full time position open and they liked your work, you may stand a 
                            chance of getting hired directly by them. 
                            If they don’t have an open position, they will likely keep your CV on file for a later opening.</p>
                    </div>
                </div>
                <div className='questionCover'>
                    <div className='question'>
                    <p>What if I am unable to pass the qualification criteria?</p>
                    <p>+</p>
                    </div>
                    <div className='answer'>
                        <p>At TopInterns we are committed to your success and will do everything in our ability to support you toward qualification. 
                            In the case that you don't qualify, we will give you the opportunity to try again.</p>
                    </div>
                </div>
            </div>
            <div className='start'>
                <h2>Start your career in coding now!</h2>
                <p>Gain confidence delivering projects in a real work environment</p>
                <div className='buttons'>
                    <button className='firstbutton'>Apply now</button>
                    <button>Ask a question</button>
                </div>
            </div>
        </div>
    )
};

export default Questions