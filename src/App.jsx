import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeaturedCards from './sections/FeaturedCards'
import ExperienceSection from './sections/ExperienceSection'
import Tech from './sections/Tech'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import StarsCanvas from './components/Canvas/Stars'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    {/* <Hero /> */}
    <ShowcaseSection />
    <LogoSection  /> 
    <FeaturedCards />
    <ExperienceSection />
    <Tech />
    <Testimonials />
    {/* <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
       <Footer />
    </div> */}
    </>
  )
}

export default App
