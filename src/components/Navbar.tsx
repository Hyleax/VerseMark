import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(prevNav => !prevNav)
    }

    const handleMouseOver = (event: any) => {
        event.target.innerHTML = "Marked_Verses"  
    }

    const handleMouseLeave = (event: any) => {
        event.target.innerHTML = "MV's"
    }

    return (
        <div className = ' flex justify-between items-center mx-auto bg-[#FFCCCC] shadow-md h-28'>
            <div className="w-full text-4xl font-bold p-7">VerseMark</div>

            {/* basically saying anything ABOVE medium will cause it to display:flex */}
            <ul className="text-xl font-medium hidden md:flex">
                <li className="px-9 py-11 hover:text-white hover:bg-black duration-150">Home</li>
                <li onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className="px-9 py-11 hover:text-white hover:bg-black duration-150">MV's</li>
                <li className="px-9 py-11 hover:text-white hover:bg-black duration-150">Bible</li>
                <li className="px-9 py-11 hover:text-white hover:bg-black duration-150">About</li>
            </ul>

            <div onClick={handleNav} className = "block md:hidden p-5">
                {nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40}/>}
            </div>

            <div className={nav ? "fixed left-0 top-28 w-[60%] h-full border-r bg-[#FFCCCC] bg-opacity-90 ease-in-out duration-500 md:hidden" : "fixed left-[-100%]"}>          
                <ul className='p-4 uppercase font-bold text-xl'>
                    <li className="p-5 border-b border-gray-600">Home</li>
                    <li className="p-5 border-b border-gray-600">Verses</li>
                    <li className="p-5 border-b border-gray-600">Bible</li>
                    <li className="p-5 border-b border-gray-600">About</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar