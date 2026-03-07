import React from 'react'
import BallCanvas from '../components/Canvas/Ball'
import Sectionwrapper from '../hoc/Sectionwrapper'
import { technologies } from '../constants'
import Title from '../components/Title'

const Tech = () => {

  return (
          <div id='skills' className='relative z-50 space-y-10'>
            <Title title='How I Contribute & My Key Skills' sub='What I Bring To The Table' />
            <div className='flex flex-row flex-wrap justify-center gap-10'>
              {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                  <BallCanvas icon={technology.icon} />
                </div>
              ))}
            </div>
          </div>
  )
}

export default Sectionwrapper(Tech, "");
