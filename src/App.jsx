import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import './index.css'
import { Footer, Navbar } from "./components";
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
 

  return (
    <main className='bg-slate-300/20'>
     <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>

    </main>
  )
}

export default App
