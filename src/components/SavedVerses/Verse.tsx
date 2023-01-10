import React from 'react'
import {AiFillDelete} from 'react-icons/ai'


const Verse = () => {
  return (
    <div className='border-b border-red-50 pt-2 text-white bg-black flex justify-between items-center active:bg-red-900 duration-100'>
        <div className="">
            <div className="text-2xl px-5 font-bold ">John 3: 16</div>
            <div className="mt-5 py-3 px-5 text-xl text-red-300">
            For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life
            </div>
        </div>

        <div className="">
            <button className='p-2 mr-4 rounded-lg bg-red-400 hover:bg-red-600'>
                <AiFillDelete size={25}/>
            </button>
        </div>
    </div>
  )
}

export default Verse