import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { VerseType } from '../types'


type VerseProps = {
  savedVerseDetails: VerseType
  deleteSavedVerse: (id: number) => void
}

const Verse = ({ savedVerseDetails, deleteSavedVerse}: VerseProps) => {
  
  // destructure savedVerseDetails
  const{id, chapterName, verseNumber, savedDate, reasonForSaving, verseText} = savedVerseDetails


  // delete verse from safved verse list
  

  //bg-[#0D0D0D]

  return (
    <div className='border-b border-red-50 pt-2 text-white bg-[#0D0D0D] flex justify-between items-center'>
        <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold px-5">{chapterName}: {verseNumber}</div>
              <div className="text-xl text-red-50 italic">Saved on {"tryna figure it out"}</div>
            </div>
            <div className="mt-5 py-3 px-5 text-xl text-red-300">
              {verseText}
            </div>
        </div>

        <div className="">
            <button className='p-2 mr-4 rounded-lg bg-red-700 hover:bg-red-900'>
                <AiFillDelete size={25} onClick = {() => deleteSavedVerse(id)}/>
            </button>
        </div>
    </div>
  )
}

export default Verse