import React from 'react'
import './donation.css'

export default function Donation() {
  return (
    <div className='donation_section'>
        <div className='container'>
            <div className='row justify-content-between'>
                <div className='donation_col1'>
                    <p className='donation_title'>How we spend your <br/> donations and where it goes</p>
                    <p className='donation_description'>We understand that when you make a  donation, you want to know exactly where your <br/> money is going and we pledge to be transparent.</p>
                    <div className='donation_stastics'>
                        <div className='d-flex align-items-center'>
                        <div className='donation_block donation_green'></div>
                        <p className='donation_text'>40% planting trees</p>
                        </div>
                        <div className='d-flex align-items-center'>
                        <div className='donation_block donation_blue'></div>
                        <p className='donation_text'>35% cleanliness program</p>
                        </div>
                        <div className='d-flex align-items-center'>
                        <div className='donation_block donation_warning'></div>
                        <p className='donation_text'>10% helping people</p>
                        </div>
                        <div className='d-flex align-items-center'>
                        <div className='donation_block donation_yellow'></div>
                        <p className='donation_text'>10% animal safety</p>
                        </div>
                        <div className='d-flex align-items-center'>
                        <div className='donation_block donation_green'></div>
                        <p className='donation_text'>5% feeding the poor</p>
                        </div>
                    </div>
                </div>
                <div className='donation_col2'>
                    <img src='./donation/donation_chart.png' alt='chart' />
                </div>
            </div>
        </div>
    </div>
  )
}
