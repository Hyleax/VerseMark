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

  const [bibleBookName, setBibleBookName] = useState(
    () => {
      if (localStorage.key(1)) {
        const currentChapter = JSON.parse(localStorage.getItem('currentChapter')  || "") || [];
        return currentChapter[0]
      }

      else {
        return 'Genesis'
      }
    }
  )
  const [BibleChapterNum, setBibleChapterNum] = useState(() => {
    if (localStorage.key(1)) {
      const currentChapter = JSON.parse(localStorage.getItem('currentChapter')  || "") || [];
      return currentChapter[1]
    }

    else {
      return 1
    }
  })

  // retrieve items from local storage
  useEffect(() => {
    if (localStorage.key(0)) {
      const retrievedSavedVerses = JSON.parse(localStorage.getItem('savedVerses') || "") || [];

      if (retrievedSavedVerses) {
        setSavedVerses(retrievedSavedVerses)
      }
  
      else {
        setSavedVerses([])
      }
    }
  }, [])

  // pass savedVerses state variable to SavedVerses component
  // pass setSavedVerses function and savedVerses state array to Bible component
  return(
    <Router>
        <div className="App">
          <Navbar/>
        </div>

        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/bible' element = {
            <Bible 
              setSavedVerses = {setSavedVerses}
              savedVerses = {savedVerses}
              bibleBookName = {bibleBookName}
              setBibleBookName= {setBibleBookName}
              BibleChapterNum = {BibleChapterNum}
              setBibleChapterNum = {setBibleChapterNum}
            />
          }
          />
          <Route path='/savedverses' element = {<SavedVerses savedVerses = {savedVerses} setSavedVerses = {setSavedVerses}/>}/>
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
