import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current,
                { scale: 0.85, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 90%',
                        end: 'top 50%',
                        scrub: 1,
                    },
                    scale: 1,
                    opacity: 1,
                    ease: 'power2.out'
                }
            )

            const items = gsap.utils.toArray('.experience-item');
            items.forEach((item, i) => {
                gsap.fromTo(item,
                    { y: 50, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 80%',
                        },
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: i * 0.3,
                        ease: 'power3.out',
                        overwrite: 'auto'
                    }
                )
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
        <section
            id="experience"
            className="py-12 md:py-16 lg:py-24 bg-gray-50 dark:bg-dark-secondary transition-colors duration-300"
            ref={sectionRef}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-primary mb-8 md:mb-12 transition-colors duration-300">
                    Experience
                </h2>

                <div className="flex flex-col gap-8 md:gap-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="experience-item border-l-2 border-primary pl-6 md:pl-8 relative"
                        >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-white dark:bg-dark border-2 border-primary rounded-full transition-colors duration-300" />

                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300">
                                {exp.role}
                            </h3>
                            <h4 className="text-lg md:text-xl text-primary dark:text-primary-light mb-4 transition-colors duration-300">
                                {exp.company}
                                <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base ml-2 transition-colors duration-300">
                                    | {exp.period}
                                </span>
                            </h4>

                            <ul className="list-none space-y-2">
                                {exp.details.map((detail, i) => (
                                    <li
                                        key={i}
                                        className="text-gray-700 dark:text-gray-300 pl-6 relative text-sm md:text-base transition-colors duration-300"
                                    >
                                        <span className="absolute left-0 text-primary">▹</span>
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
