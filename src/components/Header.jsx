import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
    const headerRef = useRef(null)
    const logoRef = useRef(null)
    const navRef = useRef(null)
    const mobileMenuRef = useRef(null)
    const { theme, toggleTheme } = useTheme()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headerRef.current, {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })

            gsap.from(logoRef.current, {
                x: -50,
                opacity: 0,
                rotation: -10,
                duration: 0.8,
                delay: 0.3,
                ease: 'back.out(1.7)'
            })

            if (window.innerWidth >= 768) {
                const navLinks = navRef.current.children
                gsap.fromTo(navLinks,
                    {
                        y: -20,
                        opacity: 0,
                        visibility: 'hidden' // Force hidden start
                    },
                    {
                        y: 0,
                        opacity: 1,
                        visibility: 'visible',
                        duration: 0.6,
                        stagger: 0.1,
                        delay: 0.5,
                        ease: 'power2.out',
                        clearProps: 'opacity,visibility' // Clear to let CSS take over
                    }
                )
            }
        }, headerRef)

        return () => ctx.revert()
    }, [])

    const toggleMobileMenu = () => {
        if (!mobileMenuOpen) {
            setMobileMenuOpen(true)
            gsap.to(mobileMenuRef.current, {
                x: 0,
                duration: 0.4,
                ease: 'power2.out'
            })
            gsap.from(mobileMenuRef.current.querySelectorAll('a, button'), {
                x: 50,
                opacity: 0,
                duration: 0.4,
                stagger: 0.1,
                delay: 0.2,
                ease: 'power2.out'
            })
        } else {
            gsap.to(mobileMenuRef.current, {
                x: '100%',
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => setMobileMenuOpen(false)
            })
        }
    }

    const closeMobileMenu = () => {
        gsap.to(mobileMenuRef.current, {
            x: '100%',
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => setMobileMenuOpen(false)
        })
    }

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 w-full z-50 glass-effect border-b border-white/10 px-4 py-3 md:px-6 lg:px-8 md:py-4"
        >
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div ref={logoRef}>
                    <Link to="/" className="flex items-center gap-1">
                        <span className="text-gradient font-extrabold text-xl md:text-2xl tracking-wide">
                            {'<'}STAR.DEV{' />'}
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <nav
                        ref={navRef}
                        className="flex items-center gap-6 lg:gap-8"
                    >
                        <a href="#experience" className="text-gray-100 font-medium text-sm lg:text-base transition-all duration-300 hover:text-primary-light hover:-translate-y-1" style={{ color: 'var(--nav-text)' }}>
                            Experience
                        </a>
                        <a href="#projects" className="text-gray-100 font-medium text-sm lg:text-base transition-all duration-300 hover:text-primary-light hover:-translate-y-1" style={{ color: 'var(--nav-text)' }}>
                            Projects
                        </a>
                        <a href="#skills" className="text-gray-100 font-medium text-sm lg:text-base transition-all duration-300 hover:text-primary-light hover:-translate-y-1" style={{ color: 'var(--nav-text)' }}>
                            Skills
                        </a>
                        <a href="#contact" className="text-gray-100 font-medium text-sm lg:text-base transition-all duration-300 hover:text-primary-light hover:-translate-y-1" style={{ color: 'var(--nav-text)' }}>
                            Contact
                        </a>
                        <a
                            href="/Star_Bawa.pdf"
                            download="Star_Bawa_Resume.pdf"
                            className="px-4 py-2 bg-primary text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-primary-light hover:scale-105 whitespace-nowrap"
                        >
                            📄 Resume
                        </a>
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/15 border-2 border-primary text-lg transition-all duration-300 hover:bg-primary hover:scale-110 shadow-lg shadow-primary/30"
                        >
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                    </nav>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-gray-100 text-3xl p-2 z-50"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className="fixed top-0 right-0 w-3/4 max-w-xs h-screen bg-dark/98 backdrop-blur-2xl transform translate-x-full flex flex-col pt-20 px-8 gap-8 border-l border-primary/30 z-40"
            >
                <a href="#experience" onClick={closeMobileMenu} className="text-gray-100 font-medium text-lg py-3 border-b border-white/10">Experience</a>
                <a href="#projects" onClick={closeMobileMenu} className="text-gray-100 font-medium text-lg py-3 border-b border-white/10">Projects</a>
                <a href="#skills" onClick={closeMobileMenu} className="text-gray-100 font-medium text-lg py-3 border-b border-white/10">Skills</a>
                <a href="#contact" onClick={closeMobileMenu} className="text-gray-100 font-medium text-lg py-3 border-b border-white/10">Contact</a>
                <a href="/Star_Bawa.pdf" download="Star_Bawa_Resume.pdf" onClick={closeMobileMenu} className="px-6 py-4 bg-primary text-white rounded-full font-medium text-center mt-4">
                    📄 Download Resume
                </a>
                <button onClick={() => { toggleTheme(); closeMobileMenu() }} className="px-6 py-4 bg-primary/15 border-2 border-primary rounded-full text-gray-100 font-medium shadow-lg shadow-primary/30">
                    {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
            </div>

            {/* Overlay */}
            {mobileMenuOpen && (
                <div onClick={closeMobileMenu} className="fixed top-0 left-0 w-full h-screen bg-black/50 z-30" />
            )}
        </header>
    )
}

export default Header
