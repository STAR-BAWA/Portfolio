import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const heroRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const ctaRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()

            tl.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                delay: 0.3
            })
                .from(subtitleRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.out'
                }, '-=0.4')
                .from(ctaRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.out'
                }, '-=0.3')

            // Animate floating polygons
            gsap.to('.hero-polygon', {
                y: -20,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: {
                    amount: 2,
                    from: 'random'
                }
            })

            gsap.to('.hero-polygon', {
                rotation: 10,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: {
                    amount: 3,
                    from: 'random'
                }
            })

            gsap.to(heroRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
                scale: 0.9,
                opacity: 0.5,
                ease: 'none'
            })
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={heroRef}
            id="home"
            className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-28 md:pt-32 lg:pt-40 pb-16 relative overflow-hidden"
        >
            {/* Decorative Polygons */}
            <div
                className="hero-polygon absolute top-20 right-[10%] w-64 h-64 rounded-full pointer-events-none"
                style={{
                    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                    background: 'rgba(16, 185, 129, 0.4)', // Increased opacity for brightness
                    filter: 'blur(40px)',
                    zIndex: 0
                }}
            />
            <div
                className="hero-polygon absolute bottom-20 left-[10%] w-96 h-96 rounded-full pointer-events-none"
                style={{
                    clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                    background: 'rgba(52, 211, 153, 0.3)', // Increased opacity
                    filter: 'blur(40px)',
                    zIndex: 0
                }}
            />
            <div
                className="hero-polygon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(0,0,0,0) 70%)',
                    zIndex: -1
                }}
            />

            <div className="overflow-hidden relative z-10">
                <h1
                    ref={titleRef}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none mb-4 md:mb-6 tracking-tight text-gray-900 dark:text-white transition-colors duration-300"
                >
                    STAR <br /> BAWA
                </h1>
            </div>

            <div className="overflow-hidden relative z-10">
                <p
                    ref={subtitleRef}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 px-4 transition-colors duration-300"
                >
                    IT Assistant & Creative Developer | Lucknow, India
                </p>
            </div>

            <div
                ref={ctaRef}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full max-w-2xl px-4 relative z-10"
            >
                <a
                    href="#projects"
                    className="btn-outline flex-1 sm:flex-initial min-w-[160px] text-center text-sm md:text-base bg-white/50 dark:bg-dark/50 backdrop-blur-sm transition-colors duration-300"
                >
                    View Work
                </a>

                <a
                    href="/Star_Bawa.pdf"
                    download="Star_Bawa_Resume.pdf"
                    className="btn-primary flex-1 sm:flex-initial min-w-[160px] text-center text-sm md:text-base shadow-xl shadow-primary/30"
                >
                    📄 Download Resume
                </a>
            </div>
        </section>
    )
}

export default Hero
