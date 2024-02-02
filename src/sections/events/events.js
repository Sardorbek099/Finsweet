import React from 'react'
import './events.css'

export default function Events() {
  return (
    <div className='events_section'>
      <div className='container'>
        <div className='d-flex align-items-center'>
            <p className='events_title'>Our Events</p>
            <span className='events_line'></span>
        </div>
        <div className='row events_gap'>
            <div className='events_col'>
                <div>
                    <p className='events_date'>23</p>
                    <p className='events_month'>SEP</p>
                </div>
                <div>
                    <div className='d-flex align-items-center'>
                    <p className='events_text'>Next Events</p>
                    <span className='events_card_line'></span>
                    </div>
                    <p className='events_short_text'>Say no to plastic usage and save the planet</p>
                </div>
                <div>
                    <img src='./events/events.png' alt='events'/>
                </div>
            </div>
            <div className='events_col'>
                <div>
                    <p className='events_date'>25</p>
                    <p className='events_month'>SEP</p>
                </div>
                <div>
                    <div className='d-flex align-items-center'>
                    <p className='events_text'>Next Events</p>
                    <span className='events_card_line'></span>
                    </div>
                    <p className='events_short_text'>Weekly cleaning program</p>

                </div>
                <div>
                    <img src='./events/events.png' alt='events'/>
                </div>
            </div>  
        </div>
      </div>
    </div>
  )
}
