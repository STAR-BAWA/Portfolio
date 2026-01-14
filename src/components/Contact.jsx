import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const contactRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate title
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: 'top 80%',
                },
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: 'power2.out'
            })

            // Animate text
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: 'top 75%',
                },
                opacity: 0,
                y: 20,
                duration: 0.6,
                delay: 0.2,
                ease: 'power2.out'
            })

            // Animate button with bounce
            gsap.from(buttonRef.current, {
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: 'top 70%',
                },
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                delay: 0.4,
                ease: 'back.out(1.4)'
            })
        }, contactRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={contactRef} id="contact" className="section">
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <h2 ref={titleRef} style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '2rem' }}>Let's Work Together</h2>
                <p ref={textRef} style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#aaa' }}>
                    Have a project in mind? I'm always open to discussing new opportunities and ideas.
                </p>
                <a
                    ref={buttonRef}
                    href="mailto:devstarbawa108@gmail.com"
                    style={{
                        display: 'inline-block',
                        padding: '1.5rem 3rem',
                        background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                        color: 'white',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 10px 30px rgba(124, 58, 237, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-5px) scale(1.05)'
                        e.target.style.boxShadow = '0 15px 40px rgba(124, 58, 237, 0.5)'
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)'
                        e.target.style.boxShadow = '0 10px 30px rgba(124, 58, 237, 0.3)'
                    }}
                >
                    ✉️ Get in Touch
                </a>
            </div>
        </section>
    )
}

export default Contact
