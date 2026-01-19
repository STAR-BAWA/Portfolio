import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(titleRef.current,
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

            // Changed to fromTo for guaranteed visibility control
            const items = gsap.utils.toArray('.skill-category');
            items.forEach((item, i) => {
                gsap.fromTo(item,
                    {
                        y: 50,
                        opacity: 0
                    },
                    {
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 85%',
                        },
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: i * 0.1, // Manual stagger
                        ease: 'power2.out',
                        overwrite: 'auto'
                    }
                );
            });
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
        <section
            id="skills"
            className="py-12 md:py-16 lg:py-24 bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300"
            ref={sectionRef}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    ref={titleRef}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-primary transition-colors duration-300"
                >
                    Technical Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div
                            key={index}
                            className="skill-category p-6 md:p-8 rounded-xl border transition-all duration-300 bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50"
                        >
                            <h3 className="text-lg md:text-xl mb-6 pb-2 border-b text-primary dark:text-primary-light border-gray-100 dark:border-gray-800">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 rounded-full text-sm md:text-base border transition-all duration-300 hover:scale-105 bg-primary/5 dark:bg-primary/10 border-primary/20 dark:border-primary/30 text-gray-800 dark:text-gray-200 hover:bg-primary/10 dark:hover:bg-primary/20"
                                    >
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
