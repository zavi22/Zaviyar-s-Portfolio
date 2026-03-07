import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { abilities } from '../constants'

gsap.registerPlugin(ScrollTrigger);

const FeaturedCards = () => {

    const sectionRef = useRef(null);
    const projectRef1 = useRef(null);

    useGSAP(() => {
        gsap.fromTo(sectionRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5 }
        )
        const projects = [projectRef1.current];
        projects.map((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 1.5, delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                })
        })
    }, [])

    return (
        <div className='w-full padding-x-lg' ref={sectionRef}>
            <div className='mx-auto grid-3-cols' ref={projectRef1}>
                {abilities.map(({ imgPath, title, desc }) => (
                    <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                        <div className='size-14 flex items-center justify-center rounded-full'>
                            <img src={imgPath} alt={title} className='size-10' />
                        </div>
                        <h3 className='text-white text-2xl font-semibold'>{title}</h3>
                        <p className='text-white-50 text-lg'>{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedCards
