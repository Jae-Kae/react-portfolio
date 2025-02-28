import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './nav/Nav'
import About from './pages/about/About.js'
import Skills from './pages/skills/Skills.js'
import Projects from './pages/projects/Projects.js'
import Contact from './pages/contact/Contact.js'
import Background from './background/Background.js'
import './styles/global.css'
import PersonalInfo from './personalInfo/PersonalInfo.js'

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Background />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <PersonalInfo />
      </Router>
    </>
  )
}

export default App
