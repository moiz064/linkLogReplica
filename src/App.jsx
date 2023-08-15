import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Navbar from './components/Navbar'
import Home from './components/Home'
import ContactPage from './components/ContactPage'


const App = () => {
  return (
    <div >
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App