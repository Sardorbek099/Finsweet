import React from 'react'
import './about_hero.css'

export default function AboutHero() {
  return (
    <div className='about_hero_section'>
      <div className='container'>
      <div className='d-flex align-items-center'>
                <span className='about_hero_line'></span>
                <p className='about_hero_title'>Know about us</p>
        </div>
        <div className='row'>
        <div className='about_hero_col1'>
            <p className='about_hero_description'>We are a nonprofit team <br/> working worldwide</p>
        </div>
        <div className='about_hero_col2'>
            <p className='about_hero_text'>Aenean faucibus nibh et justo cursus id rutrum lorem <br/> imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            <p className='about_hero_shorttext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse<br/> varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br/> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.<br/> Suspendisse varius enim elementum tristique.</p>
        </div>
        </div>
      </div>
    </div>
  )
}
