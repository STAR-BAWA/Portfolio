'use client';

import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import StackedSection from "@/components/StackedSection";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaReact, FaNodeJs, FaDatabase, FaBrain } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPython, SiTailwindcss } from "react-icons/si";

export default function Home() {
  return (
    <div className="w-full bg-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden" id="home">
        <video
          src="/sky.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        <div className="absolute top-0 left-0 w-full z-[999] bg-red-500 backdrop-blur-sm pointer-events-auto">
          <Navbar />
        </div>


        <div className="relative z-10 text-white flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <Typewriter
              options={{
                strings: [
                  "Welcome to My Portfolio",
                  "Crafting Elegant Web Experiences",
                  "React & Next.js Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-white/80">
            I’m a full-stack web developer specializing in creating responsive,
            interactive, and accessible web applications using modern
            technologies like React, Next.js, Tailwind CSS, and more.
          </p>
        </div>
      </div>

      {/* About Section */}
      <Section
        id="about"
        className="bg-red-500 w-full h-screen flex items-center justify-center px-4"
      >

        <div className="w-full h-screen bg-red-400 flex items-center justify-center px-12">
          {/* Left: Profile Image */}
          <div className="w-1/2 flex justify-center">
            <img
              src="/your-image.jpg"
              alt="Profile photo"
              className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-white"
            />
          </div>

          {/* Right: Details */}
          <div className="w-1/2 text-white pl-12">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Star Bawa</h1>
            <h2 className="text-2xl font-semibold mb-6 text-white/90">
              MCA Graduate • Web Developer • AI/ML Enthusiast
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              Passionate about building <span className="font-bold">scalable web apps</span>,
              exploring <span className="italic">AI projects</span>, and writing clean, logical code.
              Hackathon participant, researcher, and always curious to learn more.
            </p>

            {/* Fancy Buttons */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/yourusername"
                className="px-6 py-3 bg-white text-red-500 rounded-xl text-lg font-semibold shadow-md hover:scale-105 hover:bg-gray-100 transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="px-6 py-3 bg-white text-red-500 rounded-xl text-lg font-semibold shadow-md hover:scale-105 hover:bg-gray-100 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>


      </Section>


      {/* Skills Section */}
      <Section id="skills" className="bg-gray-100 px-4 py-20 w-100 h-100 bg bg-red-500">
        <StackedSection delay={0.2}>
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <FaReact className="text-5xl text-blue-500 mb-4" />
              <span className="font-semibold">React</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <FaNodeJs className="text-5xl text-green-600 mb-4" />
              <span className="font-semibold">Node.js</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <SiExpress className="text-5xl text-gray-800 mb-4" />
              <span className="font-semibold">Express</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <SiMongodb className="text-5xl text-green-500 mb-4" />
              <span className="font-semibold">MongoDB</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <FaBrain className="text-5xl text-red-500 mb-4" />
              <span className="font-semibold">Machine Learning</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <SiPython className="text-5xl text-blue-400 mb-4" />
              <span className="font-semibold">Python</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <FaDatabase className="text-5xl text-purple-600 mb-4" />
              <span className="font-semibold">SQL</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <SiTailwindcss className="text-5xl text-teal-500 mb-4" />
              <span className="font-semibold">Tailwind CSS</span>
            </div>
          </div>
        </StackedSection>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-gray-100 px-4 py-20">
        <StackedSection delay={0.3}>
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project One</h3>
                <p className="text-gray-600 mb-4">A full-stack web application built with React and Node.js.</p>
                <div className="flex gap-3 mb-4">
                  <FaReact className="text-2xl text-blue-500" />
                  <FaNodeJs className="text-2xl text-green-600" />
                  <SiMongodb className="text-2xl text-green-500" />
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Demo</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Code</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Two</h3>
                <p className="text-gray-600 mb-4">ML-powered application using Python and TensorFlow.</p>
                <div className="flex gap-3 mb-4">
                  <FaBrain className="text-2xl text-red-500" />
                  <SiPython className="text-2xl text-blue-400" />
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Demo</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Code</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Three</h3>
                <p className="text-gray-600 mb-4">REST API built with Express and MongoDB.</p>
                <div className="flex gap-3 mb-4">
                  <SiExpress className="text-2xl text-gray-800" />
                  <SiMongodb className="text-2xl text-green-500" />
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Demo</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Code</a>
                </div>
              </div>
            </div>
          </div>
        </StackedSection>
      </Section>

      <Section id="contact" className="w-full h-screen bg-red-500 flex items-center justify-center px-12">
        {/* Left: Contact / Social Illustration */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h2 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">Let’s Connect</h2>
          <div className="flex gap-6 text-4xl text-white/90">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:youremail@example.com"><FaEnvelope /></a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>

        {/* Right: Enquiry Form */}
        <div className="w-1/2 pl-12">
          <form className="bg-white p-8 rounded-2xl shadow-2xl space-y-4">
            <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
            <textarea placeholder="Your message..." rows="5" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"></textarea>
            <button type="submit" className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </Section>

    </div>
  );
}
