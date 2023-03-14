import React from 'react'

type BibleDropdownBookProps = {
    bookName: string
    setBibleBookName: React.Dispatch<React.SetStateAction<string>>
    setBibleChapterNum: React.Dispatch<React.SetStateAction<number>>
}

const BibleDropdownBook = ({bookName, setBibleBookName, setBibleChapterNum}: BibleDropdownBookProps) => {

    const handleClick = (e: any) => {
        setBibleBookName(e.target.innerHTML)
        setBibleChapterNum(1)
        
    }


    return (
        <div>
            <button onClick={handleClick} className='bg-red-200 w-[90%] py-1 my-1 rounded-md hover:bg-red-300 active:bg-red-400'>
                {bookName}
            </button>
        </div>
    )
}

export default BibleDropdownBook