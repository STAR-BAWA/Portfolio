import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Simplified title animation
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                x: -30,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out'
            })

            // Simplified education items animation
            gsap.from('.edu-item', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                x: -30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power2.out'
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const education = [
        {
            school: 'University of Lucknow',
            degree: 'Master of Computer Applications (MCA)',
            year: '2023 – 2025',
            location: 'Lucknow, India'
        },
        {
            school: 'National PG College',
            degree: 'Bachelor of Computer Applications (BCA)',
            year: '2020 – 2023',
            location: 'Lucknow, India'
        },
        {
            school: 'City Montessori School',
            degree: 'Class 12 (PCM: 89.25%) | Class 10 (90.6%)',
            year: '2019',
            location: 'Lucknow, India'
        }
    ]

    return (
        <section id="education" className="section" ref={sectionRef}>
            <div className="container">
                <h2 ref={titleRef} style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '3rem', color: 'var(--primary-color)' }}>Education</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {education.map((edu, index) => (
                        <div key={index} className="edu-item" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            flexWrap: 'wrap',
                            borderBottom: '1px solid #333',
                            paddingBottom: '1.5rem'
                        }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{edu.school}</h3>
                                <p style={{ color: 'var(--accent-color)', fontSize: '1.1rem' }}>{edu.degree}</p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <p style={{ color: '#888', marginBottom: '0.2rem' }}>{edu.location}</p>
                                <p style={{ fontWeight: '500' }}>{edu.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
