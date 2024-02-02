import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <div className='hero_section'>
      <div className='container'>
        <p className='hero_title'>Save the environment <br/> today for a better <br/> tomorrow</p>
        <div className='hero_buttons'>
            <button className='hero_button1'>What we do</button>
            <button className='hero_button2'>
                <img src='./hero/play_icon.png' alt='play_icon'/>
                Play Video
            </button>
        </div>
        <div className='d-flex hero_statistics'>
        <p className='hero_statistic'>23,800 trees planted</p>
        <span className='hero_line'></span>
        <p className='hero_statistic'>5840 donations collected</p>
        </div>
      </div>
    </div>
  )
}
