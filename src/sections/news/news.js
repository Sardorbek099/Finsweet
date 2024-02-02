import React from 'react'
import './news.css'

export default function News() {
    return (
        <div className='news_section'>
            <div className='container'>
                <div className='d-flex align-items-center'>
                    <p className='news_title'>Read Our News</p>
                    <span className='news_line'></span>
                </div>
                <div className='row news_gap'>
                    <div className='news_col'>
                        <div className='news_card'>
                        <img src='./news/news1.png' alt='nature'/>
                        <p className='news_card_title'>Don’t destroy greenery and don’t spoil scenery</p>
                        <p className='news_card_description'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Suspendisse varius enim</p>
                        </div>
                    </div>
                    <div className='news_col'>
                        <div className='news_card'>
                        <img src='./news/news2.png' alt='nature'/>
                        <p className='news_card_title'> Is climate change happening <br/> faster than expected?</p>
                        <p className='news_card_description'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Suspendisse varius enim</p>
                        </div>
                    </div>
                    <div className='news_col'>
                        <div className='news_card'>
                        <img src='./news/news3.png' alt='nature'/>
                        <p className='news_card_title'>Top 10 facts about wind farms <br/> you didn't know</p>
                        <p className='news_card_description'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Suspendisse varius enim</p>
                        </div>
                    </div>
                    <div className='news_col'>
                        <div className='news_card'>
                        <img src='./news/news4.png' alt='nature'/>
                        <p className='news_card_title'>Our goal is to make water <br/> available for everyone</p>
                        <p className='news_card_description'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Suspendisse varius enim</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
