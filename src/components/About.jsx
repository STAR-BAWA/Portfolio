import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-text', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="about" className="section" ref={containerRef} style={{ background: '#0f0f0f' }}>
            <div className="container">
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '3rem' }}>About Me</h2>
                <div className="about-text" style={{ fontSize: 'clamp(1.2rem, 2vw, 2rem)', maxWidth: '1000px', lineHeight: '1.4' }}>
                    <p style={{ marginBottom: '2rem' }}>
                        I am a passionate developer designed to bring creative ideas to life on the web.
                        I specialize in building clean, modern, and interactive experiences using the latest web technologies.
                    </p>
                    <p>
                        With a focus on performance and accessibility, I ensure that every project I touch is not only visually stunning but also technically sound.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
