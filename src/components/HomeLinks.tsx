import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const HomeLinks = () => {
  return (
    <div className='w-100 grid md:grid-cols-2 grid-cols-1 text-center text-4xl font-bold md:h-[400px] h-[500px]'>
        <NavLink to={"/savedverses"} className="bg-[grey] text-white flex justify-center items-center  hover:text-red-300 hover:bg-gradient-to-r from-gray-900 to-gray-500">Marked Verses</NavLink>
        <NavLink to={"/bible"} className="bg-[grey] text-white flex justify-center items-center  hover:text-red-300 hover:bg-gradient-to-r from-gray-900 to-gray-500">Read the Bible</NavLink>
    </div>
  )
}

export default HomeLinks