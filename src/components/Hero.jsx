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

            // Zoom scroll animation
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
        <section ref={heroRef} id="home" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '0'
        }}>
            <div style={{ overflow: 'hidden' }}>
                <h1 ref={titleRef} style={{
                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                    fontWeight: '700',
                    lineHeight: 1,
                    marginBottom: '1rem',
                    letterSpacing: '-0.02em'
                }}>
                    STAR <br /> BAWA
                </h1>
            </div>
            <div style={{ overflow: 'hidden' }}>
                <p ref={subtitleRef} style={{
                    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                    color: '#bbb',
                    maxWidth: '600px',
                    margin: '0 auto 2rem'
                }}>
                    IT Assistant & Creative Developer | Lucknow, India
                </p>
            </div>
            <div ref={ctaRef} style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#projects" style={{
                    padding: '1rem 2rem',
                    border: '1px solid var(--text-color)',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
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
                    View Work
                </a>
                {/* 
                    RESUME DOWNLOAD BUTTON
                    
                    Scalability Notes:
                    - This resume is served as a static file from /public/Star_Bawa.pdf
                    - When deployed to Vercel/Netlify, this file is automatically served via global CDN
                    - CDN (Content Delivery Network) means the PDF is cached at 100+ locations worldwide
                    
                    How it handles 1M+ downloads WITHOUT crashing:
                    1. User clicks download → Request goes to nearest CDN edge server
                    2. CDN serves cached PDF (doesn't hit your origin server)
                    3. Only first request per region hits origin, rest served from cache
                    4. Result: Supports millions of concurrent downloads
                    
                    Alternative for EXTREME scale (10M+ downloads/month):
                    - Upload PDF to AWS S3 or Google Cloud Storage
                    - Enable CloudFront/CDN on storage bucket
                    - Update href to: "https://cdn.yourdomain.com/resume.pdf"
                    - Cost: ~$1 per 100,000 downloads
                    
                    Current setup (Vercel free tier) handles up to millions of downloads/month at $0 cost
                */}
                <a
                    href="/Star_Bawa.pdf"
                    download="Star_Bawa_Resume.pdf"
                    style={{
                        padding: '1rem 2rem',
                        background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                        color: 'white',
                        borderRadius: '50px',
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 10px 25px rgba(124, 58, 237, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px)'
                        e.target.style.boxShadow = '0 15px 35px rgba(124, 58, 237, 0.5)'
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)'
                        e.target.style.boxShadow = '0 10px 25px rgba(124, 58, 237, 0.3)'
                    }}
                >
                    📄 Download Resume
                </a>
            </div>
        </section>
    )
}

export default Hero
