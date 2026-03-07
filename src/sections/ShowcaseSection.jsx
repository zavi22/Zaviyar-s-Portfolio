import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
// Scrolltrigger is a GSAP plugin that allows you to create scroll-based animations. It provides a simple and powerful way to trigger 
// animations based on the user's scroll position, making it easy to create engaging and interactive web experiences. Without importing 
// ScrollTrigger, you won't be able to use its features in your GSAP animations, and any code that relies on ScrollTrigger will not work 
// as expected.

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const projectRef1 = useRef(null);
    const projectRef2 = useRef(null);
    const projectRef3 = useRef(null);

    useGSAP(() => {
        gsap.fromTo(sectionRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5 }
        )
        const projects = [projectRef1.current, projectRef2.current, projectRef3.current];
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
        <section id='work' className='app-showcase' ref={sectionRef}>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* left side */}
                    <div className='first-project-wrapper' ref={projectRef1}>
                        <div className='image-wrapper'>
                            <img src='/images/project1 (2).png' alt="E-Commerce Platform" />
                        </div>
                        <div className='text-content'>
                            <h2>Built a modern, high-performance e-commerce platform that provides a seamless shopping experience.</h2>
                            <p className='text-white-50 md:text-xl'>
                                An website built with React , Node.js, Express, and MongoDB, offering seamless shopping services. It features secure payments, and a user-friendly interface for both user and admin.
                            </p>
                        </div>
                    </div>
                    {/* right side */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={projectRef2}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="/images/project2 (2).png" alt="Netflix Clone" />
                            </div>
                            <h2>Netflix Clone</h2>
                        </div>
                        <div className='project' ref={projectRef3}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/images/project3 (2).png" alt="Keeper App" />
                            </div>
                            <h2>Keeper App - Where you put what you don't remember</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection
