import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Zoom-in animation for title
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 1,
                },
                scale: 0.8,
                opacity: 0,
                y: 20,
                ease: 'power2.out'
            })

            // Zoom-in animation for skill categories
            gsap.from('.skill-category', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                scale: 0.85,
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out'
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const skills = {
        "Languages": ["JavaScript", "Java", "Python", "Node.js"],
        "Frontend": ["React.js", "Next.js", "HTML5", "CSS3", "Responsive Design", "Web Speech API"],
        "Backend & Databases": ["Express.js", "RESTful APIs", "MongoDB", "MySQL", "Firebase", "Supabase", "SQL Server"],
        "DevOps & Tools": ["Git", "GitHub Actions", "CI/CD Pipelines", "VS Code", "Agile", "ERP Management"],
        "Soft Skills": ["Leadership", "Mentoring", "Documentation", "Stakeholder Management", "Root Cause Analysis"]
    }

    return (
        <section id="skills" className="section" ref={sectionRef} style={{ background: 'var(--secondary-color)' }}>
            <div className="container">
                <h2 ref={titleRef} style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '3rem', color: 'var(--primary-color)' }}>Technical Skills</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {Object.entries(skills).map(([category, items], index) => (
                        <div key={index} className="skill-category" style={{
                            background: 'var(--bg-color)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            border: '1px solid #333'
                        }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-color)', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
                                {category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {items.map((skill, i) => (
                                    <span key={i} className="skill-tag" style={{
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(138, 43, 226, 0.1)',
                                        color: 'var(--text-color)',
                                        borderRadius: '50px',
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(138, 43, 226, 0.3)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
