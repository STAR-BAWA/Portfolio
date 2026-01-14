import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import lenis from 'lenis'

// Initialize smooth scrolling basic setup (will refine later)
if (typeof window !== 'undefined') {
  const lenisInstance = new lenis()
  function raf(time) {
    lenisInstance.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Add more routes here if needed */}
      </Route>
    </Routes>
  )
}

export default App
