import { useState, useEffect } from 'react'
import './App.css'
import Bible from './components/Bible'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeLinks from './components/HomeLinks'
import Footer from './components/Footer'

function App() {
  return(
    <div className="">
      <Navbar/>
      <Hero/>
      <HomeLinks/>
      <Footer/>
    </div>
  )
}

export default App
