import React, {useState, useEffect} from 'react'
import Verse from './Verse'
import VerseInfo from './VerseInfo'
import { VerseType } from '../types'

type SavedVersesProps = {
    savedVerses: VerseType[]
    setSavedVerses: React.Dispatch<React.SetStateAction<VerseType[]>>
}

const SavedVerses = ({ savedVerses, setSavedVerses }: SavedVersesProps) => {
    
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    useEffect(()=> {
        if (savedVerses.length >= 1) {
            localStorage.setItem('savedVerses', JSON.stringify(savedVerses))
        }
    }, [savedVerses])

    const deleteSavedVerse = (id: string) => {
        setSavedVerses(savedVerses.filter((v) => {
            return v.id !== id
        })) 
    }

    const selectVerse = (id: string) => {
        const verses = savedVerses.filter(v => v.id === id)
        setSelectedDate(verses[0].savedDate)
    }
    

    let savedVerseEls = savedVerses.map((v) => {
        return(
            <Verse 
                key={v.id} 
                savedVerseDetails = {v} 
                selectVerse = {selectVerse}
                deleteSavedVerse = {deleteSavedVerse}/>)
    })

    return (
        <div className='grid grid-cols-8 h-screen text-white'>
            <div className="md:col-span-6 col-span-8 md:overflow-auto">
                <div className="font-bold mt-5">
                    <div className='text-3xl pb-20 text-center underline'>Marked Verses</div>
                    <div className="">
                        {savedVerseEls}
                    </div>
                
                </div>
            </div>
            <div className="md:col-span-2 col-span-8 border-l-2 border-red-200">
                <div className="text-3xl font-bold mt-5 text-center pb-20 underline">Verse Info</div>
                <div className="">
                    <VerseInfo selectedDate={selectedDate}/>
                </div>
            </div>
        </div>
    )
}

export default SavedVerses