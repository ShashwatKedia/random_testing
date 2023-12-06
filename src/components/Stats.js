import React from 'react';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import {GrTopCorner, GrBottomCorner} from 'react-icons/gr';
import './Stats.css';

function Stats(){
    return(
        <div>
            <div className="Stats-1">
                <div className='stats-box'>
                    <div className='stats-text'>
                        <p>IViL - IIT for Villages is a student run organization in IIT Madras(IITM). It serves as a discussion forum and action platform for students of IITM to implement their ideas for Rural India.</p>
                        {/* <p>Read more</p> */}
                    </div>
                </div>
            </div>

            <div className='Stats-2'>
                <div>
                    <div className='stats2-head'>
                        <GrTopCorner className='tp-corner'/>
                        <h1>OUR SIGNIFICANCE</h1>
                        <GrBottomCorner className='bm-corner'/>
                    </div>
                    <div class="stats-cards">
                        <div class="card card-1">
                            <img src="images/stats-cards-1.png" alt="stats-cards-imgs" />
                            <h1>5000+</h1>
                            <p>Impacted</p>
                        </div>
                        <div class="card card-2">
                            <img src="images/stats-cards-2.png" alt="stats-cards-imgs" />
                            <h1>20+</h1>
                            <p>Projects</p>
                        </div>
                        <div class="card card-3">
                            <img src="images/stats-cards-3.png" alt="stats-cards-imgs" />
                            <h1>5+</h1>
                            <p>Villages</p>
                        </div>
                        <div class="card card-4">
                            <img src="images/stats-cards-4.png" alt="stats-cards-imgs" />
                            <h1>17+</h1>
                            <p>Years</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="quote-section">
                <div className='quote-text'>
                    <FaQuoteLeft className='quote-icon-lf'/>
                    <p className='quote'>THE FUTURE OF INDIA LIES IN ITS VILLAGES</p>
                    <FaQuoteRight className='quote-icon-rt'/>
                </div>
                <p className='author'>Mahatma Gandhi</p>
            </div>
        </div>
        
    );
}

export default Stats;