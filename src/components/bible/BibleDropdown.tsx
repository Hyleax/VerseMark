import React, {useState} from 'react'
import {AiOutlineUp, AiOutlineDown} from 'react-icons/ai'
import BibleDropdownBook from './BibleDropdownBook'
import AllBibleBooks from './AllBibleBooks.json'

type BibleDropdownProps = {
  bibleBookName: string
  setBibleBookName: React.Dispatch<React.SetStateAction<string>>
}

const BibleDropdown = ({bibleBookName, setBibleBookName}: BibleDropdownProps) => {
  
  const [isOpen, setIsOpen] = useState(false)

  let BibleBookEls = AllBibleBooks.map((b) => {
    return (<BibleDropdownBook key={b.key} bookName= {b.key} setBibleBookName = {setBibleBookName}/>)
  }
)

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

      <div className="absolute z-10 top-[85px] bg-red-100 w-[500px] h-[400px] opacity-95 rounded-md text-black text-l p-5 grid md:grid-cols-2 grid-cols-1 ">
       
        <div className="text-center overflow-auto">
          <span className="underline font-bold">Books</span>
          <div className="flex flex-col pt-2">
            {BibleBookEls}
          </div>
        </div>
        <div className="text-center">
        <span className="underline font-bold">Chapters</span>
        </div>
      </div>
        
      }
    </div>
  )
}

export default BibleDropdown