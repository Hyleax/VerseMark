import { useState, useEffect } from 'react'
import './App.css'
import Bible from './components/bible/Bible'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeLinks from './components/HomeLinks'
import Footer from './components/Footer'
import { VerseType } from './components/types'

// importing React router
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SavedVerses from './components/SavedVerses/SavedVerses'

function App() {


  // state variable for saving verses
  const[savedVerses, setSavedVerses] = useState<VerseType[]>([])

  // retrieve items from local storage
  // useEffect(() => {
  //   const retrievedSavedVerses = JSON.parse(localStorage.getItem('verses') || "");

  //   if (retrievedSavedVerses) {
  //     setSavedVerses(retrievedSavedVerses)
  //   }
  // }, [])


  // pass savedVerses state variable to SavedVerses component
  // pass setSavedVerses function to Bible component
  return(
    <Router>
        <div className="App">
          <Navbar/>
        </div>

        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/bible' element = {<Bible setSavedVerses = {setSavedVerses}/>}/>
          <Route path='/savedverses' element = {<SavedVerses savedVerses = {savedVerses}/>}/>
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
