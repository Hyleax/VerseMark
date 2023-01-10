import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {NavLink, Link} from 'react-router-dom'

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
        <div className = 'rounded flex justify-between items-center mx-auto bg-[#FFCCCC] shadow-md h-28'>
            <Link to="/">
            <div className="w-full text-4xl font-bold p-7">VerseMark</div>
            </Link>

            {/* basically saying anything ABOVE medium will cause it to display:flex */}
            <ul className="text-xl font-medium hidden md:flex">
                <NavLink to= "/" className="px-9 py-11 hover:text-white hover:bg-black duration-150">Home</NavLink>
                <NavLink to= "/savedverses" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className="px-9 py-11 hover:text-white hover:bg-black duration-150">MV's</NavLink>
                <NavLink to={"/bible"} className="px-9 py-11 hover:text-white hover:bg-black duration-150">Bible</NavLink>
                <NavLink to={""} className="px-9 py-11 hover:text-white hover:bg-black duration-150">About</NavLink>
            </ul>

            <div onClick={handleNav} className = "block md:hidden p-5">
                {nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40}/>}
            </div>

            <div className={nav ? "fixed left-0 top-28 w-[60%] h-full border-r bg-[#FFCCCC] bg-opacity-90 ease-in-out duration-500 md:hidden" : "fixed left-[-100%]"}>          
                <ul className='p-4 uppercase font-bold text-xl'>
                    <li className="p-5 border-b border-gray-600">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li className="p-5 border-b border-gray-600">
                        <NavLink to={"/savedverses"}>MV's</NavLink>
                    </li>
                    <li className="p-5 border-b border-gray-600">
                        <NavLink to={"/bible"}>Bible</NavLink>
                    </li>
                    <li className="p-5 border-b border-gray-600">About</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar