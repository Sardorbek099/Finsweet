import React from 'react'
import './awards.css'

export default function Awards() {
  return (
    <div className='awards_section'>
        <div className='container'>
            <p className='awards_title'>Awards & Recognitions</p>
            <div className='row forMargin'>
                <div className='awards_col1'>
                    <div className='awards_card'>
                    <img src='./awards/awards1.png' alt='awards'/>
                    <p className='awards_card_year'>2021</p>
                    <p className='awards_card_title'>Best NGO Award</p>
                    <p className='awards_card_text'>Berlin, Germany</p>
                    </div>
                </div>
                <div className='awards_col2'>
                    <div className='awards_card'>
                    <img src='./awards/awards2.png' alt='awards'/>
                    <p className='awards_card_year'>2018</p>
                    <p className='awards_card_title'>Global Award</p>
                    <p className='awards_card_text'>New York, USA</p>
                    </div>
                </div>
                <div className='awards_col3'>
                    <div className='awards_card'>
                    <img src='./awards/awards3.png' alt='awards'/>
                    <p className='awards_card_year'>2014</p>
                    <p className='awards_card_title'>Foresto Award</p>
                    <p className='awards_card_text'>New Delhi, India</p>
                    </div>
                </div>
                <div className='awards_col4'>
                    <div className='awards_card'>
                    <img src='./awards/awards4.png' alt='awards'/>
                    <p className='awards_card_year'>2010</p>
                    <p className='awards_card_title'>Earth Saver Award</p>
                    <p className='awards_card_text'>Vienna, Austria</p>
                    </div>
                </div>  
            </div>
        </div>  
    </div>
  )
}
