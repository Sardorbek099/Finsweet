import React from 'react'
import './volunteer.css'

export default function Volunteer() {
  return (
    <div className='volunteer_padding'>
    <div className='container'>
        <div className='volunteer_section'>
            <span className='volunteer_black'></span>
            <img src='./volunteer/volunteer.png' alt='volunteer'/>
            <p className='volunteer_title'>You can contribute to make <br/> the environment greener!</p>
            <div className='volunteer_buttons'>
            <button className='volunteer_button1'>Join as a volunteer</button>
            <button className='volunteer_button2'>Donate</button>
            </div>
        </div>
    </div>
    </div>
  )
}
