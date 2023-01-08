import React, {useState, useEffect} from 'react'
import BibleDropdown from './BibleDropdown'

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
  const [bibleBookName, setBibleBookName] = useState('genesis')
  const [BibleChapterNum, setBibleChapterNum] = useState(1)


 

  let api = `https://bible-api.com/${bibleBookName} ${BibleChapterNum}`
  
  console.log(bibleBookData);
  
  console.log(haveData);
  
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
   return(<span key={verse} className="p-1"> <b>{verse}</b>  {text}</span>)
 })


 // button functions
  const nextChapter = () => {
    if (BibleChapterNum < verses.length) {
      setBibleChapterNum(prev => prev + 1)
      document.documentElement.scrollTop = 0;
    }
  }

  
  const prevChapter = () => {
    if (BibleChapterNum > 1) {
      setBibleChapterNum(prev => prev - 1)
      document.documentElement.scrollTop = 0;
    }
  }

  return (    
      <div className="">
        {haveData ?
        
        <div className="">
        <button onClick={prevChapter} className="fixed top-[50%] left-[10%] border-2 border-black p-2 rounded-full bg-red-200 font-bold bg-opacity-70 hover:bg-black hover:text-white">Prev</button>
        <button onClick={nextChapter} className="fixed top-[50%] right-[10%] border-2 border-black p-2 rounded-full bg-red-200 font-bold bg-opacity-70 hover:bg-black hover:text-white">Next</button>


        {/* Bible Dropdown */}
        <div className="text-center p-5">
          <BibleDropdown/>
        </div>

        {/* Chapter Name */}
        <div className="font-bold mb-5 text-center text-3xl underline">
          {reference}
        </div>

        {/* Bible Verses */}
        <div className="flex justify-center">
          <div className="md:w-[75%] w-[90%] text-xl md:text-2xl p-5">
          {verseEls}
          </div>
        </div>
      </div>

      : 

      <div className="text-5xl absolute top-[50%] w-[100%]">
        <div className=" text-center">Loading the Word of God..</div>
      </div>
        }
      </div>
  )
}

export default Bible