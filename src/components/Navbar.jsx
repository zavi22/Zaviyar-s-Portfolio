import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY >= 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className='inner'>
                <a href="#hero" className='logo'>
                    Zaviyar | Portfolio
                </a>
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ name, link }) => {
                            return (
                                <li key={name} className='group'>
                                    <a href={link}>
                                        <span>{name}</span>
                                        <span className='underline'></span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <a href="#contact" className='contact-btn group'>
                    <div className='inner' href='#contact'>
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default Navbar;