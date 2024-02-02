import React from 'react'
import './environment.css'

let environmentCards = [
    {
        imgUrl:'./environment/environment1.png',
        title:'Build healthy cities',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    {
        imgUrl:'./environment/environment2.png',
        title:'Protect land and water',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    {
        imgUrl:'./environment/environment3.png',
        title:'Tree plantation',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    {
        imgUrl:'./environment/environment4.png',
        title:'Water sustainability',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    {
        imgUrl:'./environment/environment5.png',
        title:'Animal safety',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    {
        imgUrl:'./environment/environment6.png',
        title:'Biodiversity',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
]


export default function Environment() {
  return (
    <div className='environment_section'>
      <div className='container'>
        <p className='environment_title'>What we do for the environment</p>
        <div className='row forGap'>
        {
            environmentCards.map((item,index) =>{
                return(
                    <div key={index} className='environment_card'>
                        <div className='environment_card_img'>
                            <img src={item.imgUrl} alt='logo'/>
                        </div>
                        <div className='environment_card_body'>
                            <p className='environment_card_title'>{item.title}</p>
                            <p className='environment_card_text'>{item.description}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
      </div>
    </div>
  )
}
