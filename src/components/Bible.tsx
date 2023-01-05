import React, {useState, useEffect} from 'react'

const Bible = () => {
  
  // type of the array of verses in bibleBook
  type BibleVerseType = {
    book_id: string
    book_name: string
    chapter: number
    text: string
    verse: number
  }

  // the type of a specifc bible
  type BibleChapterType = {
    reference: string
    text: string
    translation_id: string
    translation_name: string
    translation_note: string
    verses: BibleVerseType[]
  }

  const [bibleBook, setBibleBook] = useState<BibleChapterType>({} as BibleChapterType)


 

  let api = `https://bible-api.com/john 3`
  
  console.log(bibleBook);
  
  useEffect(() => {
    (
      async () => {
        let data = await fetch(api).then(res => res.json())
        setBibleBook(data)
      }
    )()
  }, [api])


  // destructuring bibleBook
  const {reference, verses} = bibleBook

  let verseEls = verses?.map((v) => {
    const {verse, text} = v
    return(<div key={verse} className="">{verse} - {text}</div>)
  })

  return (
    <div className="App">
     <div className="">
      {reference}
     </div>
     <div className="">
      {verseEls}
     </div>
    </div>
  )
}

export default Bible