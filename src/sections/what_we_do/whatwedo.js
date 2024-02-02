import React from 'react'
import './whatwedo.css'

export default function Whatwedo() {
    return (
        <div className='whatwedo_section'>
            <div className='container'>
                <div className='row whatwedo_gap'>
                    <div className='whatwedo_col1'>
                        <div className='d-flex align-items-center'>
                            <div className='whatwedo_line'></div>
                            <p className='whatwedo_title'>What we do</p>
                        </div>
                        <div className='whatwedo_texts'>
                            <p className='whatwedo_short_descripton'>We care for earth, care for <br /> the coming birth</p>
                            <p className='whatwedo_descripton'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        </div>
                        <div className='card_section'>
                            <div className='whatwedo_cards'>
                                <div className='whatwedocard'>
                                    <img src='./whatwedo/icon1.png' alt='icon' />
                                    <div className='whatwedo_card_texts'>
                                        <p className='whatwedo_card_title'>Build Healthy Cities</p>
                                        <p className='whatwedo_card_text'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Suspendisse varius enim in eros.</p>
                                    </div>
                                </div>
                                <div className='whatwedocard'>
                                    <img src='./whatwedo/icon2.png' alt='icon' />
                                    <div className='whatwedo_card_texts'>
                                        <p className='whatwedo_card_title'>Tree Plantation</p>
                                        <p className='whatwedo_card_text'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Suspendisse varius enim in eros.</p>
                                    </div>
                                </div>
                                <div className='whatwedocard'>
                                    <img src='./whatwedo/icon3.png' alt='icon' />
                                    <div className='whatwedo_card_texts'>
                                        <p className='whatwedo_card_title'>Protect Land and Water</p>
                                        <p className='whatwedo_card_text'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Suspendisse varius enim in eros.</p>
                                    </div>
                                </div>
                                <div className='whatwedocard'>
                                    <img src='./whatwedo/icon4.png' alt='icon' />
                                    <div className='whatwedo_card_texts'>
                                        <p className='whatwedo_card_title'>Animal Safety</p>
                                        <p className='whatwedo_card_text'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Suspendisse varius enim in eros.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='whatwedo_col2'>
                        <img src='./whatwedo/image1.png' alt='we' />
                    </div>
                </div>
            </div>
        </div>
    )
}
