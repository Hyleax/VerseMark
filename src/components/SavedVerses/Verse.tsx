import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { VerseType } from '../types'


type VerseProps = {
  savedVerseDetails: VerseType
  deleteSavedVerse: (id: string) => void
  selectVerse: (id: string) => void
}

const Verse = ({ savedVerseDetails, deleteSavedVerse, selectVerse}: VerseProps) => {
  
  // destructure savedVerseDetails
  const{id, chapterName, verseNumber, savedDate, reasonForSaving, verseText} = savedVerseDetails
  const dateString = String(savedDate).substring(0, 10)

  return (
    <div onClick={() => selectVerse(id)} className='border-b border-red-50 pt-2 text-white bg-[#0D0D0D] flex justify-between items-center'>
        <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="md:text-3xl text-2xl font-bold px-5">{chapterName}: {verseNumber}</div>
              <div className="md:text-2xl text-l text-red-50">{dateString}</div>
            </div>
            <div className="mt-5 py-3 px-5 text-xl text-red-300">
              {verseText}
            </div>
        </div>

        <div onClick = {() => deleteSavedVerse(id)}>
            <button className='p-2 mr-4 rounded-lg bg-red-700 hover:bg-red-900'>
                <AiFillDelete size={25}/>
            </button>
        </div>
    </div>
  )
}

export default Verse