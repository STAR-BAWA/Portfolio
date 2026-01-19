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
                    end: 'top 40%',
                    scrub: 1,
                },
                scale: 0.9,
                y: 50,
                opacity: 0,
                ease: 'power3.out'
            })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <section
            id="about"
            className="py-12 md:py-16 lg:py-24 bg-white dark:bg-dark-tertiary transition-colors duration-300"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white transition-colors duration-300">
                    About Me
                </h2>

                <div className="about-text text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed">
                    <p className="mb-6 md:mb-8 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                        I am a passionate developer designed to bring creative ideas to life on the web.
                        I specialize in building clean, modern, and interactive experiences using the latest web technologies.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                        With a focus on performance and accessibility, I ensure that every project I touch is not only visually stunning but also technically sound.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
