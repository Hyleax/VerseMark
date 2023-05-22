import React from 'react'

type verseInfoProps = {
  selectedDate: Date | null
}

const VerseInfo = ({ selectedDate }: verseInfoProps) => {

  return (
    <div className='text-center'>
        <div className=" mb-[80px]">
            <div className="underline text-2xl p-3 row-span-3 mb-3">Saved on</div>
            <div className="md:text-3xl text-2xl text-red-400 px-2">{selectedDate && String(selectedDate)}</div>
        </div>
        
        <div className="">
        <div className="underline text-2xl p-3 row-span-3 mb-6">Reason for Saving</div>
        <div className="md:text-2xl text-xl text-red-400 text-left px-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia facere beatae nam repellendus in architecto eum quibusdam iure dolor, temporibus, vero nostrum a soluta adipisci et libero nulla quis.
        </div>
        </div>
    </div>
  )
}

export default VerseInfo