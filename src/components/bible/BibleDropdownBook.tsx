import React from 'react'

type BibleDropdownBookProps = {
    bookName: string
    setBibleBookName: React.Dispatch<React.SetStateAction<string>>
}

const BibleDropdownBook = ({bookName, setBibleBookName}: BibleDropdownBookProps) => {

    const handleClick = (e: any) => {
        setBibleBookName(e.target.innerHTML)
    }


    return (
        <div>
            <button onClick={handleClick} className='bg-red-200 w-[80%] py-1 my-1 rounded-md hover:bg-red-300'>
                {bookName}
            </button>
        </div>
    )
}

export default BibleDropdownBook