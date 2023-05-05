import React from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'

// Components
import Landing from './Components/Landing/Landing'
import Nav from './Components/Nav/Nav'

// Pages
import BurgerShop from './Components/BurgerShop/BurgerShop'

const App = () => {
  return (
  <>
  <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/burgers" element={<BurgerShop />}/>
      </Routes>
    </main>
  </>
  )
}

export default App