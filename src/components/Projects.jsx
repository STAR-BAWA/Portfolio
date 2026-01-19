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
            gsap.fromTo('.projects-title',
                { scale: 0.8, opacity: 0, y: 20 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: 1,
                    },
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    ease: 'power2.out'
                }
            )

            const cards = gsap.utils.toArray('.project-card');
            cards.forEach((card, i) => {
                gsap.fromTo(card,
                    { scale: 0.85, y: 30, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 75%',
                        },
                        scale: 1,
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: i * 0.15,
                        ease: 'power2.out',
                        overwrite: 'auto'
                    }
                )
            })

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
        <section
            ref={sectionRef}
            id="projects"
            className="py-12 md:py-16 lg:py-24 min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="projects-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 border-b border-gray-200 dark:border-gray-800 pb-4 text-gray-900 dark:text-white transition-colors duration-300">
                    Selected Work
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="project-card group cursor-pointer"
                        >
                            <div className="h-64 md:h-72 lg:h-80 bg-gray-100 dark:bg-dark-secondary mb-4 overflow-hidden rounded-lg transition-colors duration-300">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 text-sm md:text-base">
                                {project.category}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
