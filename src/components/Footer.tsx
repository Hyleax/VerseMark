import React from 'react'

function Footer() {
  return (
    
    <footer className="bottom-0 p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-red-200">
        <span className="text-sm text-black sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Norman Yap </a>| All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-black sm:mt-0">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>Name
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </footer>

  )
}

export default Footer