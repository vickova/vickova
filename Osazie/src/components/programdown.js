import React from 'react';

function ProgramDown(){
    return(
        <div className='programPrice'>
            <h2>Program price</h2>
            <div className='programOption'>
                <h3>Option 1: Full payment up front</h3>
                <div>
                    <li>Pay NGN 1,523,000 up front and nothing more after that.</li>
                    <li>You may break the payment down into 4 monthly installments of NGN 380,750 each.</li>
                </div>
            </div>
            <p>Or</p>
            <div className='programOption'>
                <h3>Option 2: Make a partial payment and enter our income sharing agreement (ISA)</h3>
                <div>
                    <div>
                        <p><b>Partial payment up front:</b></p>
                        <ul>
                            <li>Students in Lebanon, Jordan, Egypt and Iraq are sponsored for the partial payment and <b>pay nothing up front.</b></li>
                            <li>Students in the rest of the world pay <b>NGN 380,750 up front</b>. This can be broken down into <b>4 monthly installments of NGN 95,190.</b></li>
                        </ul>
                    </div>
                    <div>
                        <p><b>Income sharing agreement (ISA)</b></p>
                        <ul>
                            <li>After your partial payment, <b>we invest in you and cover the rest of the cost for you</b>.</li>
                            <li>Once you start earning from a future job in coding, you pay us 15% of your monthly income for 24 months.</li>
                            <li>The ISA payments only apply when you are earning <b>NGN 380,750 per month or more</b>.</li>
                            <li> <b>If you don't earn, you don't pay.</b></li>
                            <li>This option is only available to students who are ready to commit to a full time job immediately.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='buttons'>
                <button className='firstbutton'>Apply now</button>
                <button>Ask a question</button>
            </div>
        </div>
    )
};

export default ProgramDown;