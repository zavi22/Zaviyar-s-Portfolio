import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeaturedCards from './sections/FeaturedCards'
import ExperienceSection from './sections/ExperienceSection'
import Tech from './sections/Tech'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoSection  /> 
    <FeaturedCards />
    <ExperienceSection />
    <Tech />
    </>
  )
}

export default App
