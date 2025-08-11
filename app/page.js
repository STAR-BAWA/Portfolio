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
      <Section id="about" className="bg-gray-100 px-4 py-20">
        <StackedSection>
          <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-gray-700 text-lg text-center">
            I am a passionate developer who loves building clean and scalable
            UI/UX experiences. From front-end interfaces to full-stack
            applications, I enjoy solving problems with elegant code.
          </p>
        </StackedSection>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-gray-100 px-4 py-20">
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

      {/* Contact / Social + Business Enquiry Form */}
      <Section id="contact" className="bg-gray-100 px-4 py-20">
        <StackedSection delay={0.4}>
          <h2 className="text-3xl font-bold mb-6 text-center">Connect With Me</h2>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8 text-2xl text-blue-600">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:text-black transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Business Enquiry Form */}
          <form className="space-y-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your message or enquiry..."
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Enquiry
            </button>
          </form>
        </StackedSection>
      </Section>
    </div>
  );
}
