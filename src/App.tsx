import { useState, useEffect } from 'react'
import './App.css'
import Bible from './components/bible/Bible'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeLinks from './components/HomeLinks'
import Footer from './components/Footer'

// importing React router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <Router>
        <div className="App">
          <Navbar/>
        </div>

        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/bible' element = {<Bible/>}/>
        </Routes>
    </Router>
  )
}

const Home = () => {
  return(
    <div className="">
      <Hero/>
      <HomeLinks/>
      <Footer/>
    </div>
  )
}

export default App
