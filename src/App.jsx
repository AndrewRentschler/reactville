import React from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
// Components
import Landing from './Components/Landing/Landing'
import Nav from './Components/Nav/Nav'

// Pages
import BurgerShop from './Components/BurgerShop/BurgerShop'

const App = () => {

  const [daytime, setDaytime] = useState(true)

  return (
  <>
  <Nav setDaytime={setDaytime}/>
    <main>
      <Routes>
        <Route path="/" element={<Landing daytime={daytime}/>}/>
        <Route path="/burgershop" element={<BurgerShop />}/>
      </Routes>
    </main>
  </>
  )
}

export default App