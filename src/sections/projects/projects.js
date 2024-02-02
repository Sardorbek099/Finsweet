import React from 'react'
import './projects.css'

export default function Projects() {
  return (
    <div className='projects_section'>
      <div className='container'>
        <div className='d-flex align-items-center'>
            <span className='projects_line'></span>
            <p className='projects_title'>Projects we have done</p>
        </div>
        <p className='projects_description'>We are Creating sustainable <br/> society, for everyone and <br/> forever.</p>
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
