import React from 'react'
import Book from './Book.jsx'

function BooksContainer(props) {
  let booksArray = props.books.map((book) => {
    return <Book key={book.id} book={book} />
  })

  return (
    <div className="image-stack">
      {booksArray}
    </div>
  )
}

export default BooksContainer