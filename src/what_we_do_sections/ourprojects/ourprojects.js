import React from 'react'
import './ourprojects.css'

export default function OurProjects() {
  return (
    <div className='ourprojects_section'>
      <div className='container'>
        <p className='ourprojects_title'>Projects we have done</p>
        <p className='ourprojects_text'>We are creating a sustainable <br/> society, for everyone.</p>
      <div className='row justify-content-between'>
            <div className='project_col'>
                 <div className='project_card'>
                    <img src='./projects/project1.png' alt='tree'/>
                    <p className='project_card_title'>Mission 40K: Tree plantation</p>
                    <p className='project_card_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <button className='project_card_button'>See more</button>
                 </div>
                 <span className='project_card_black'></span>
            </div>
            <div className='project_col'>
                 <div className='project_card'>
                    <img src='./projects/project2.png' alt='tree'/>
                    <p className='project_card_title'>Weekly cleanliness <br/> program in city</p>
                    <p className='project_card_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <button className='project_card_button'>See more</button>
                 </div>
                 <span className='project_card_black'></span>
            </div>
            <div className='project_col'>
                 <div className='project_card'>
                    <img src='./projects/project3.png' alt='tree'/>
                    <p className='project_card_title'>Wildlife safety program <br/>  2021</p>
                    <p className='project_card_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <button className='project_card_button'>See more</button>
                 </div>
                 <span className='project_card_black'></span>
            </div>
        </div>
      </div>
    </div>
  )
}
