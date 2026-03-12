import React, { useEffect } from 'react'
import BallCanvas from '../components/Canvas/Ball'
import Sectionwrapper from '../hoc/Sectionwrapper'
import { technologies } from '../constants'
import Title from '../components/Title'
import gsap from "gsap"

const Tech = () => {

  useEffect(() => {
    gsap.to('.skill-icon', {
      y: -20,
      rotation: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "sine.inOut"
    })
  }, [])

  return (
    <div id='skills' className='relative z-50 space-y-10'>

      <Title
        title='How I Contribute & My Key Skills'
        sub='What I Bring To The Table'
      />

      {/* MOBILE SKILLS */}
      <div className='flex md:hidden flex-wrap justify-center gap-6'>
        {technologies.map((technology, index) => (
          <img
            key={index}
            src={technology.icon}
            className="skill-icon w-16 h-16 bg-[#b8b7b6] rounded-full p-3"
          />
        ))}
      </div>

      {/* TABLET / DESKTOP 3D BALLS */}
      <div className='hidden md:flex flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <div className='w-24 h-24 md:w-28 md:h-28' key={index}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Sectionwrapper(Tech, "")