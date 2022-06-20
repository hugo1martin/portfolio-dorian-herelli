import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Portfolio from './pages/Portfolio'
import AboutMe from './pages/AboutMe'
import NotFound from './pages/NotFound'

import './styles/styles.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<AboutMe />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
