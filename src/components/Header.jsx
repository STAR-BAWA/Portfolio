import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
    const headerRef = useRef(null)
    const logoRef = useRef(null)
    const navRef = useRef(null)
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate header entrance
            gsap.from(headerRef.current, {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })

            // Animate logo with slight rotation
            gsap.from(logoRef.current, {
                x: -50,
                opacity: 0,
                rotation: -10,
                duration: 0.8,
                delay: 0.3,
                ease: 'back.out(1.7)'
            })

            // Stagger navigation links
            gsap.from(navRef.current.children, {
                y: -20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.5,
                ease: 'power2.out'
            })

            // Add hover effect with GSAP
            Array.from(navRef.current.children).forEach((link) => {
                if (!link.classList.contains('theme-toggle')) {
                    link.addEventListener('mouseenter', () => {
                        gsap.to(link, {
                            y: -3,
                            color: 'var(--accent-color)',
                            duration: 0.3,
                            ease: 'power2.out'
                        })
                    })

                    link.addEventListener('mouseleave', () => {
                        gsap.to(link, {
                            y: 0,
                            color: 'var(--text-color)',
                            duration: 0.3,
                            ease: 'power2.out'
                        })
                    })
                }
            })
        }, headerRef)

        return () => ctx.revert()
    }, [])

    return (
        <header ref={headerRef} style={{
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100,
            backgroundColor: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <div ref={logoRef} className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                <Link to="/" style={{
                    color: 'var(--text-color)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    letterSpacing: '0.5px'
                }}>
                    <span style={{
                        background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: '800',
                        fontSize: '1.6rem'
                    }}>
                        {'<'}STAR.DEV{' />'}
                    </span>
                </Link>
            </div>
            <nav>
                <nav ref={navRef} style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#experience" style={{ color: 'var(--text-color)', fontWeight: '500' }}>Experience</a>
                    <a href="#projects" style={{ color: 'var(--text-color)', fontWeight: '500' }}>Projects</a>
                    <a href="#skills" style={{ color: 'var(--text-color)', fontWeight: '500' }}>Skills</a>
                    <a href="#contact" style={{ color: 'var(--text-color)', fontWeight: '500' }}>Contact</a>
                    <a
                        href="/Star_Bawa.pdf"
                        download="Star_Bawa_Resume.pdf"
                        style={{
                            padding: '0.5rem 1.2rem',
                            background: 'var(--primary-color)',
                            color: 'white',
                            borderRadius: '50px',
                            fontWeight: '500',
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'var(--accent-color)'
                            e.target.style.transform = 'scale(1.05)'
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'var(--primary-color)'
                            e.target.style.transform = 'scale(1)'
                        }}
                    >
                        📄 View Resume
                    </a>
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: '1px solid var(--text-color)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'var(--text-color)'
                            e.target.style.color = 'var(--bg-color)'
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent'
                            e.target.style.color = 'var(--text-color)'
                        }}
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </nav>
            </nav>
        </header>
    )
}

export default Header
