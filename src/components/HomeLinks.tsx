import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const HomeLinks = () => {
  return (
    <div className='w-100 grid md:grid-cols-2 grid-cols-1 text-center text-4xl font-bold md:h-[400px] h-[500px]'>
        <NavLink to={"/savedverses"} className="bg-gradient-to-r from-pink-300 to-red-300 flex justify-center items-center  hover:text-red-500">Marked Verses</NavLink>
        <NavLink to={"/bible"} className="bg-gradient-to-l from-pink-300 to-red-300 flex justify-center items-center  hover:text-red-500">Read the Bible</NavLink>
    </div>
  )
}

export default HomeLinks