import React from 'react'
import { logoIconsList } from '../constants/'

const LogoIcon = ({icon}) => {
    return (
        <div className='flex-none flex-center marquee-item'>
            <img src={icon.imgPath} alt='company logo' />
        </div>
    )
}

const LogoSection = () => {
    return (
        <div className='md:my-20 my-10 relative'>
            <div className='gradient-edge' />
            <div className='gradient-edge' />
            <div className='marquee h-52'>
                <div className='marquee-box md:gap-12 gap-5'>
                    {[...logoIconsList, ...logoIconsList, ...logoIconsList, ...logoIconsList].map((icon, index) => (
                         <LogoIcon icon={icon} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LogoSection
