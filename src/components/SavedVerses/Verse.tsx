import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

const Verse = () => {
  const deleteSavedVerse = () => {

  }


  return (
    <div className='border-b border-red-50 pt-2 text-white bg-[#0D0D0D] flex justify-between items-center'>
        <div className="">
            <div className="flex justify-between items-center">
              <div className="text-3xl px-5 font-bold ">John 3: 16</div>
              <div className="text-xl text-red-50 italic">Saved on 15th February 2023</div>
            </div>
            <div className="mt-5 py-3 px-5 text-xl text-red-300">
            For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life
            </div>
        </div>

        <div className="">
            <button className='p-2 mr-4 rounded-lg bg-red-700 hover:bg-red-900'>
                <AiFillDelete size={25} onClick = {deleteSavedVerse}/>
            </button>
        </div>
    </div>
  )
}

export default Verse