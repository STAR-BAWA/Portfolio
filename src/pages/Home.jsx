import React from 'react'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
// import Education from '../components/Education'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            {/* <Education /> */}
            <About />
            <Contact />
        </>
    )
}

export default Home
