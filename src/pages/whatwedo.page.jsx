import React from 'react'
import Whatwedohero from '../what_we_do_sections/whatwedohero/whatwedohero'
import Environment from '../what_we_do_sections/environment/environment'
import Volunteer from '../sections/volunteer/volunteer'
import News from '../sections/news/news'
import Events from '../sections/events/events'
import OurProjects from '../what_we_do_sections/ourprojects/ourprojects'

export default function WhatWeDo() {
  return (
    <div>
      <Whatwedohero/>
      <Environment/>
      <OurProjects/>
      <Volunteer/>
      <News/>
      <Events/>
    </div>
  )
}
