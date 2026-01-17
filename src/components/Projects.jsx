import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import financeImg from '../assets/finance.svg'
import voiceImg from '../assets/voice.svg'
import automationImg from '../assets/automation.svg'

const projectsData = [
    {
        id: 1,
        title: 'AI Finance Manager',
        category: 'Next.js, Supabase, Clerk, AI Integration',
        description: 'Full-stack expense tracking application with AI-powered financial insights and automated bill summaries.',
        image: financeImg
    },
    {
        id: 2,
        title: 'Voice-to-Code Application',
        category: 'React, Web Speech API',
        description: 'Real-time voice command interface to convert speech into HTML/CSS snippets for rapid UI prototyping.',
        image: voiceImg
    },
    {
        id: 3,
        title: 'HackerRank Automation',
        category: 'Node.js, Cheerio',
        description: 'Automated script to handle login and code submission processes for competitive programming efficiency.',
        image: automationImg
    }
]

const Projects = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Zoom-in animation for section title
            gsap.from('.projects-title', {
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

            // Zoom-in + slide-up animation for project cards
            gsap.from('.project-card', {
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

            // Add parallax zoom effect on each card
            gsap.utils.toArray('.project-card').forEach((card) => {
                gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                    scale: 1.05,
                    ease: 'none'
                })
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="projects" className="section" style={{ minHeight: '100vh' }}>
            <div className="container">
                <h2 className="projects-title" style={{
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    marginBottom: '4rem',
                    borderBottom: '1px solid #333',
                    paddingBottom: '1rem'
                }}>Selected Work</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card"
                            style={{ cursor: 'pointer' }}
                        >
                            <div style={{
                                height: '300px',
                                backgroundColor: '#1a1a1a',
                                marginBottom: '1rem',
                                overflow: 'hidden',
                                borderRadius: '8px'
                            }}>
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ color: '#888' }}>{project.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
