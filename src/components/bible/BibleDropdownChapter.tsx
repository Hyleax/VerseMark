import React from 'react'

type BibleDropdownChapterProps = {
  bibleChapNum: number
  setBibleChapterNum: React.Dispatch<React.SetStateAction<number>>
}

const BibleDropdownChapter = ({bibleChapNum, setBibleChapterNum}: BibleDropdownChapterProps) => {

  const handleClick = (e: any) => {
    const currentChapter = Number(e.target.innerHTML)
    setBibleChapterNum(currentChapter) 
  }

  return (
    <div onClick={handleClick} className='border-2 border-black p-2  rounded-md hover:bg-red-300 active:bg-red-400'>
      {bibleChapNum}
    </div>
  )
}

export default BibleDropdownChapter