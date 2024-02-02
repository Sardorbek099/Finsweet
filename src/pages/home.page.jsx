import React from 'react'
import Hero from '../sections/hero/hero'
import About from '../sections/about/about'
import Whatwedo from '../sections/what_we_do/whatwedo'
import Projects from '../sections/projects/projects'
import Donation from '../sections/donation/donation'
import Volunteer from '../sections/volunteer/volunteer'
import News from '../sections/news/news'
import Events from '../sections/events/events'

export default function HomePage() {
  return (
    <div>
        <Hero/> 
        <About/>
        <Whatwedo/>
        <Projects/> 
        <Donation/>
        <Volunteer/>
        <News/>
        <Events/>
    </div>
  )
}
