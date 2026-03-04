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
                            <img src='/images/project1.png' alt="Ryde" />
                        </div>
                        <div className='text-content'>
                            <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
                            <p className='text-white-50 md:text-xl'>
                                An app built with React Native, Node.js, Express, and MongoDB, offering seamless ride-hailing services. It features real-time tracking, secure payments, and a user-friendly interface for both riders and drivers.
                            </p>
                        </div>
                    </div>
                    {/* right side */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={projectRef2}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="/images/project2.png" alt="Library Management Platform" />
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>
                        <div className='project' ref={projectRef3}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/images/project3.png" alt="YC Directory" />
                            </div>
                            <h2>YC Directory- A Startup Showcase App</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection
