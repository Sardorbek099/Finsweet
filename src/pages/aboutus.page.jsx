import React from 'react'
import AboutHero from '../about_us_sections/about_hero/about_hero'
import AboutMain from '../about_us_sections/about_main/about_main'
import Awards from '../about_us_sections/awards/awards'
import Volunteer from '../sections/volunteer/volunteer'
import News from '../sections/news/news'
import Events from '../sections/events/events'
import Journey from '../about_us_sections/journey/journey'
import Team from '../about_us_sections/team/team'

export default function AboutPage() {
  return (
    <div>
      <AboutHero/>
      <AboutMain/>
      <Awards/>
      <Journey/>
      <Team/>
      <Volunteer/>
      <News/>
      <Events/>
    </div>
  )
}
