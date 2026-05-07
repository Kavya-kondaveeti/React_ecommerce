import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import Contact from './Contact'
import Navbar from './Navbar'

export const HelloContext = createContext()

function App() {
  const [cart, setCart] = useState([])

  return (
    <HelloContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </HelloContext.Provider>
  )
}

export default App