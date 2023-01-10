import React, {useState, useEffect} from 'react'
import BibleDropdown from './BibleDropdown'
import {GrNext, GrPrevious} from 'react-icons/gr'
import Footer from '../Footer'

const Bible = () => {
  
  // type of the array of verses in bibleBook
  type BibleVerseType = {
    book_id: string
    book_name: string
    chapter: number
    text: string
    verse: number
  }

  // the type of a specifc bible
  type BibleChapterType = {
    reference: string
    text: string
    translation_id: string
    translation_name: string
    translation_note: string
    verses: BibleVerseType[]
  }

  const [haveData, updateHaveData] = useState(false)
  const [bibleBookData, setBibleBookData] = useState<BibleChapterType>({} as BibleChapterType)
  const [bibleBookName, setBibleBookName] = useState('Genesis')
  const [BibleChapterNum, setBibleChapterNum] = useState(1)
 

  let api = `https://bible-api.com/${bibleBookName} ${BibleChapterNum}`
  
  
  
  useEffect(() => {
    (
      async () => {
        let data = await fetch(api).then(res => res.json())
        setBibleBookData(data)
        updateHaveData(true)
      }
    )()
  }, [api])


 // destructuring bibleBook
 const {reference, verses} = bibleBookData

 let verseEls = verses?.map((v) => {
   const {verse, text} = v
   return(<span key={verse} className="p-1 "> <b className='text-white text-3xl'>{verse}</b>  {text}</span>)
 })

 


 // button functions
  const nextChapter = () => {
      setBibleChapterNum(prev => prev + 1)
      document.documentElement.scrollTop = 0;
  }

  const prevChapter = () => {
    if (BibleChapterNum > 1) {
      setBibleChapterNum(prev => prev - 1)
      document.documentElement.scrollTop = 0;
    }
  }

  return (    
      <div className="">
        {haveData 
        
        ?
          
          <div className="text-white mb-12">
            <button onClick={prevChapter} className="fixed top-[50%]  md:left-[7%] left-[10%]  border-2 border-black p-2 rounded-full bg-red-200 font-bold bg-opacity-70 hover:bg-red-300 active:bg-red-400 hover:text-white z-0">
              <GrPrevious size={50}/>
            </button>
            <button onClick={nextChapter} className="fixed top-[50%]  md:right-[7%] right-[10%]  border-2 border-black p-2 rounded-full bg-red-200 font-bold bg-opacity-70 hover:bg-red-300 active:bg-red-400 hover:text-white">
              <GrNext size={50}/>
            </button>


          {/* Bible Dropdown */}
          <div className= "">
            <BibleDropdown 
              bibleBookName = {bibleBookName} 
              setBibleBookName = {setBibleBookName} 
              setBibleChapterNum = {setBibleChapterNum}
            />
          </div>

          {/* Chapter Name */}
          <div className="font-bold mb-5 text-center text-5xl underline">
            {reference}
          </div>

          {/* Bible Verses */}
          <div className="flex justify-center z-10">
            <div className="lg:w-[55%] md:w-[75%] w-[90%] text-2xl md:text-2xl p-5 text-red-100">
            {verseEls}
            </div>
          </div>
        </div>

      : 

        <div className="text-5xl absolute top-[50%] w-[100%]">
          <div className=" text-center text-white">Loading the Word of God...</div>
        </div>
        }

        <Footer/>
      </div>

  
  )
}

export default Bible