import React from 'react'

const HomeLinks = () => {
  return (
    <div className='w-100 grid md:grid-cols-2 grid-cols-1 text-center text-4xl font-bold md:h-[400px] h-[500px]'>
        <h1 className="bg-red-100  flex justify-center items-center hover:bg-black hover:text-red-200">Saved Verses</h1>
        <h1 className="bg-red-100  flex justify-center items-center hover:bg-black hover:text-red-200">Read the Bible</h1>
    </div>
  )
}

export default HomeLinks