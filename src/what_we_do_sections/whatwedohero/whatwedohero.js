import React from 'react'
import './whatwedohero.css'

export default function Whatwedohero() {
    return (
        <div className='whatwedohero_section'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='whatwedohero_col1'>
                        <div className='d-flex align-items-center'>
                            <span className='whatwedohero_line'></span>
                            <p className='whatwedohero_title'>What we do</p>
                        </div>
                        <div className='whatwedohero_texts'>
                            <p className='whatwedohero_description'>We are working<br /> worldwide</p>
                            <p className='whatwedohero_short_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        </div>
                    </div>
                    <div className='whatwedohero_col2'>
                        <img src='./whatwedohero/whatwedohero.png' alt='hero' />
                    </div>
                </div>
            </div>
        </div>
    )
}
