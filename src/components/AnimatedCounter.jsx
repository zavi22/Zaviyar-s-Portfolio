import React from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
    return (
        <div id='counter' className='padding-x-lg xl:mt-0 md:mt-90'>
            <div className='mx-auto grid-4-cols'>
                {counterItems.map((item, index) => {
                    return (
                        <div key={index} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
                            <div className='counter-number text-white text-5xl font-bold mb-2'>
                                <CountUp
                                    suffix={item.suffix}
                                    end={item.value}/>
                            </div>
                            <div className="label text-white text-sm">{item.label}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AnimatedCounter