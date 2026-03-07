import React from 'react'
import Title from '../components/Title'
import { expCards } from '../constants/index'
import GlowCard from '../components/GlowCard'
import gsap from 'gsap'
import  { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);
// Scrolltrigger is a GSAP plugin that allows you to create scroll-based animations. It provides a simple and powerful way to trigger 
// animations based on the user's scroll position, making it easy to create engaging and interactive web experiences. Without importing 
// ScrollTrigger, you won't be able to use its features in your GSAP animations, and any code that relies on ScrollTrigger will not work 
// as expected.

const ExperienceSection = () => {
    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                duration: 1,
                transformOrigin: 'left left',
                ease: 'power2.inOut',
                scrollTrigger:{
                    trigger: card,
                    start: 'top 80%',
                    scrub: 1,
                }
            })
        })

        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top 80%',
                end: '70% center',
                onUpdate: (self) => {
                    gsap.to('.timeline', {
                        scaleY: 1 -self.progress
                    })
                }
        }})

        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger:{
                    trigger: text,
                    start: 'top 80%',
                    scrub: 1,
                }
            })
        })
    },[])
    return (
        <section id='experience' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
            <div className='w-full h-full md:px-20 px-5'>
                <Title title='Professional Work Experience' sub='My Career Overview' />
                <div className='mt-32 relative'>
                    <div className='relative z-50 xl:space-y-32 space-y-10'>
                        {expCards.map((card, index) => {
                            return (
                                <div key={card.title} className='exp-card-wrapper'>
                                    <div className='xl:w-2/6'>
                                        <GlowCard card={card} index={index}>
                                            <div key={index}>
                                                <img src={card.imgPath} alt={card.title} />
                                                {/* In React, anything placed between a component's opening and closing tag becomes children. */}
                                            </div>
                                        </GlowCard>
                                    </div>
                                    <div className='xl:w-4/6'>
                                        <div className='flex items-start'>
                                            <div className='timeline-wrapper'>
                                                <div className='timeline'/>
                                                <div className='gradient-line w-1 h-full'/>
                                            </div>
                                            <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                                                <div className='timeline-logo z-20'>
                                                    <img src={card.logoPath} alt="logo" />
                                                </div>
                                                <div>
                                                    <h1 className='font-semibold text-3xl'>{card.title}</h1>
                                                    <p className='my-5 text-white-50'>📅 {card.date}</p>
                                                    <p className='text-[#839cb5] italic'>Responsibilities</p>
                                                    <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                                                        {card.responsibilities.map((responsibility) => (
                                                            <li key={responsibility} className='text-lg'>
                                                                {responsibility}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
