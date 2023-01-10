import React, {useState, useEffect} from 'react'
import Verse from './Verse'
import VerseInfo from './VerseInfo'

function SavedVerses() {
    const [dropdownIsOpen, setDropdrownIsOpen] = useState(false)


    const handleDropdownClick = () => {
        setDropdrownIsOpen(prev => !prev)
    }

    return (
        <div className='grid grid-cols-8 h-screen text-white'>
            <div className="md:col-span-6 col-span-8 md:overflow-auto">
                <div className="font-bold mt-5 ">
                    <div className='text-3xl pb-5 text-center underline'>Marked Verses</div>
                    <div className="">
                        <Verse/>
                        <Verse/>
                        <Verse/>
                        <Verse/>
                        <Verse/>
                        <Verse/>
                        <Verse/>
                        <Verse/>
                        <Verse/>


                    </div>
                
                </div>
            </div>
            <div className="md:col-span-2 col-span-8 border-l-2 border-red-200">
                <div className="text-3xl font-bold mt-5 text-center pb-5 underline">Verse Info</div>
                <div className="">
                    <VerseInfo/>
                </div>
            </div>
        </div>
    )
}

export default SavedVerses