import React, {useState, useEffect} from 'react'
import {AiOutlineUp, AiOutlineDown} from 'react-icons/ai'
import BibleDropdownBook from './BibleDropdownBook'
import AllBibleBooks from './AllBibleBooks.json'
import BibleDropdownChapter from './BibleDropdownChapter'

type BibleDropdownProps = {
  bibleBookName: string
  setBibleBookName: React.Dispatch<React.SetStateAction<string>>
  setBibleChapterNum: React.Dispatch<React.SetStateAction<number>>
}

const BibleDropdown = ({bibleBookName, setBibleBookName, setBibleChapterNum}: BibleDropdownProps) => {
  
  const [isOpen, setIsOpen] = useState(false)
  const [chapNums, setChapNums] = useState(0)

  let BibleBookEls = AllBibleBooks.map((b) => {
    return (
      <BibleDropdownBook 
        key={b.key} 
        bookName= {b.key} 
        setBibleBookName = {setBibleBookName} 
        setBibleChapterNum =  {setBibleChapterNum}
        />
      )
  }
)



useEffect(() => {
  (
    function() {
      for (const b of AllBibleBooks) {
        if (bibleBookName.toLowerCase() === b.key.toLowerCase()) {
          setChapNums(b.chapterNum)
        }
      }      
    }
  )()
}, [bibleBookName])


const chapterArray = Array.from({length: chapNums}, (_, i) => i + 1)
  let chapNumEls = chapterArray.map((c) => {
    return(<BibleDropdownChapter key={c} bibleChapNum={c} setBibleChapterNum = {setBibleChapterNum}/>)
  })



  return (
    <div className='relative mb-20 flex items-center justify-center pt-10'>

      {/* Dropdown button */}
      <button onClick={() => setIsOpen(prev => !prev)} className='flex  items-center bg-red-100 text-2xl px-2 py-1 rounded-md font-bold text-black active:bg-white duration-300'>
        <div className="mr-7 ml-2">{bibleBookName}</div>

        <div className="">
        {
          isOpen

          ?

          <AiOutlineUp />

          :

          <AiOutlineDown/>
        }
        </div>
      </button>


        {/* Dropdown conten */}
      {
        
      isOpen &&

      <div className="absolute z-10 top-[85px] bg-red-100 md:w-[750px] h-[500px] w-[300px] opacity-95 rounded-md text-black text-l p-5 grid md:grid-cols-2 grid-cols-1 ">
       
        <div className="text-center overflow-auto">
          <span className="underline font-bold">Books</span>
          <div className="flex flex-col pt-2">
            {BibleBookEls}
          </div>
        </div>
        <div className="text-center overflow-auto">
        <span className="underline font-bold">Chapters</span>
        <div className="grid grid-cols-5 gap-x-1 gap-y-2 pl-2 mt-3">
          {chapNumEls}
        </div>
        </div>
      </div>
        
      }
    </div>
  )
}

export default BibleDropdown