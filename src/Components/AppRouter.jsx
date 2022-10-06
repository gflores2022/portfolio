import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Contact from './Contact'

export default function AppRouter() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
  )
}
