import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const HomeLinks = () => {
  return (
    <div className='w-100 grid md:grid-cols-2 grid-cols-1 text-center text-4xl font-bold md:h-[400px] h-[500px]'>
        <NavLink to={"/"} className="bg-red-100  flex justify-center items-center hover:bg-black hover:text-red-200">Saved Verses</NavLink>
        <NavLink to={"/bible"} className="bg-red-100  flex justify-center items-center hover:bg-black hover:text-red-200">Read the Bible</NavLink>
    </div>
  )
}

export default HomeLinks