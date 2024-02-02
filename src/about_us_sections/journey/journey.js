import React from 'react'
import './journey.css'

export default function Journey() {
  return (
    <div className='container'>
        <div className='journey_section'>
            <div className='row justify-content-between'>
            <div className='journey_col1'>
            <p className='journey_title'>OUR JOURNEY</p>
            <p className='journey_text'>How we raised 34M</p>
            <p className='journey_short_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Suspendisse varius enim in eros elementum tristique. Duis cursus,<br/> mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam <br/> libero vitae erat. Aenean faucibus nibh.</p>
            <div className='d-flex forJounrneyGap'>
                <div>
                    <p className='journey_count'>34M+</p>
                    <p className='journey_subscriber'>Donation Received</p>
                </div>
                <div>
                    <p className='journey_count'>400+</p>
                    <p className='journey_subscriber'>Volunters</p>
                </div>
                <div>
                    <p className='journey_count'>40K+</p>
                    <p className='journey_subscriber'>Trees planted</p>
                </div>
            </div>
            </div>
            <div className='journey_col2'>
                <img src='./journey/journey1.png' alt='journey'/>
            </div>
            </div>
        </div>
    </div>
  )
}
