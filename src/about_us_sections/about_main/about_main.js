import React from 'react'
import './about_main.css'

export default function AboutMain() {
    return (
        <div className='about_main_section'>
            <div className='container'>
                <img className='about_main_video' src='./about_us/video.png' alt='video' />
                <div className='row about_main_gap'>
                    <div className='about_main_col'>
                        <p className='about_main_title'>our mission</p>
                        <p className='about_main_description'>We make the world we save our own environment</p>
                        <p className='about_main_short_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    </div>
                    <div className='about_main_col'>
                        <p className='about_main_title'>our vision</p>
                        <p className='about_main_description'>Plant more trees to make world air pollution free</p>
                        <p className='about_main_short_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    </div>
                </div>
                <div className='d-flex align-items-center supporters'>
                    <p className='our_supporters'>our Supporters</p>
                    <span className='supporters_line'></span>
                </div>
                <div className='row gapForMain '>
                    <img src='./about/logo1.png' alt='supporter' />
                    <img src='./about/logo2.png' alt='supporter' />
                    <img src='./about/logo3.png' alt='supporter' />
                    <img src='./about/logo4.png' alt='supporter' />
                    <img src='./about/logo5.png' alt='supporter' />
                    <img src='./about/logo6.png' alt='supporter' />
                </div>
            </div>
        </div>
    )
}
