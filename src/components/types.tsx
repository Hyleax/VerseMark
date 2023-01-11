// type of a bible verse that will be saved to local storage
export type VerseType = {
  id: number
  chapterName: string
  verseNumber: number
  savedDate: Date
  reasonForSaving: string
}

// type of the array of verses in bibleBook
export type BibleVerseType = {
    book_id: string
    book_name: string
    chapter: number
    text: string
    verse: number
  }

// the type of a specifc bible chapter
export type BibleChapterType = {
    reference: string
    text: string
    translation_id: string
    translation_name: string
    translation_note: string
    verses: BibleVerseType[]
  }