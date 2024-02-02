import React from 'react'
import './about.css'

export default function About() {
    return (
        <div className='about_section'>
            <div className='container'>
                <div className='row about_gap'>
                    <div className='about_col1'>
                        <div className='title_section'>
                            <span className='about_line'></span>
                            <p className='about_title'>Know About us</p>
                        </div>
                        <p className='about_short_description'>We help nature smile and survive everywhere</p>
                        <p className='about_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.<br /><br />
                            ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        <button className='about_button'>Learn More</button>
                    </div>
                    <div className='about_col2'>
                        <img src='./about/about1.png' alt='video_play' />
                    </div>
                </div>
                <div className='d-flex align-items-center supporters'>
                    <p className='our_supporters'>our Supporters</p>
                    <span className='supporters_line'></span>
                </div>
                <div className='row gapForImg'>
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
