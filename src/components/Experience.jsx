import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Zoom-in animation for entire section
            gsap.from(sectionRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 90%',
                    end: 'top 50%',
                    scrub: 1,
                },
                scale: 0.85,
                opacity: 0,
                ease: 'power2.out'
            })

            // Existing experience items animation
            gsap.from('.experience-item', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: 'power3.out'
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const experiences = [
        {
            company: 'City Montessori School',
            role: 'IT Assistant',
            period: 'July 2025 – Present',
            location: 'Lucknow, India',
            details: [
                'Managed organization servers and assisted faculty with uploading material, ensuring data integrity.',
                'Administered and maintained ERP software system, ensuring seamless data integration and workflow automation.',
                'Installed and configured software applications across 100+ workstations, ensuring seamless operations.',
                'Provided technical support for digital classroom setups, improving teaching efficiency by 30%.',
                'Implemented proactive IT monitoring systems, decreasing incident response time by 50%.'
            ]
        },
        {
            company: 'Ascezen Consulting Pvt Ltd',
            role: 'Data Analysis Intern',
            period: '2024',
            location: 'Lucknow, India',
            details: [
                'Analyzed datasets with 1000+ records using Python and Excel to identify business insights.',
                'Conducted model comparison analysis and presented findings to stakeholders.',
                'Collaborated with cross-functional teams to translate data insights into actionable recommendations.'
            ]
        }
    ]

    return (
        <section id="experience" className="section" ref={sectionRef}>
            <div className="container">
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '3rem', color: 'var(--primary-color)' }}>Experience</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item" style={{
                            borderLeft: '2px solid var(--primary-color)',
                            paddingLeft: '2rem',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                left: '-9px',
                                top: '0',
                                width: '16px',
                                height: '16px',
                                background: 'var(--bg-color)',
                                border: '2px solid var(--primary-color)',
                                borderRadius: '50%'
                            }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
                                {exp.company} <span style={{ color: '#666', fontSize: '0.9rem' }}>| {exp.period}</span>
                            </h4>
                            <ul style={{ listStyle: 'none' }}>
                                {exp.details.map((detail, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem', color: '#ccc', position: 'relative', paddingLeft: '1.5rem' }}>
                                        <span style={{ position: 'absolute', left: '0', color: 'var(--primary-color)' }}>▹</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
