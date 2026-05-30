import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './About'
import Contact from './Contact'
import Education from './Education'
import Project from './Project'
import Services from './Services'
import Layout from './components/Layout'

const MainRouter = () => {
    return (
        <div>
            <Layout /> 
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/education" element={<Education />} />
                <Route exact path="/project" element={<Project />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/services" element={<Services />}/>
            </Routes>
        </div>
    )
}

export default MainRouter