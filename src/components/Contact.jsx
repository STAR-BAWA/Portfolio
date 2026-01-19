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
            gsap.from(contactRef.current, {
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: 'top 85%',
                    end: 'top 55%',
                    scrub: 1,
                },
                scale: 0.9,
                opacity: 0,
                ease: 'power2.out'
            })

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

            gsap.from(buttonRef.current, {
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: 'top 70%',
                },
                opacity: 0,
                scale: 0.5,
                duration: 0.8,
                delay: 0.4,
                ease: 'back.out(1.7)'
            })
        }, contactRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={contactRef}
            id="contact"
            className="py-12 md:py-16 lg:py-24 bg-white dark:bg-dark transition-colors duration-300"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2
                    ref={titleRef}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-gray-900 dark:text-white transition-colors duration-300"
                >
                    Let's Work Together
                </h2>

                <p
                    ref={textRef}
                    className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-12 px-4 transition-colors duration-300"
                >
                    Have a project in mind? I'm always open to discussing new opportunities and ideas.
                </p>

                <a
                    ref={buttonRef}
                    href="mailto:devstarbawa108@gmail.com"
                    className="inline-block px-8 md:px-12 py-4 md:py-6 bg-gradient-to-br from-primary to-primary-light text-white text-base md:text-lg font-semibold rounded-full uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50"
                >
                    ✉️ Get in Touch
                </a>
            </div>
        </section>
    )
}

export default Contact
