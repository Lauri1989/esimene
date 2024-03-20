import React from 'react';

function BooksList({ books, onBookClick }) {
  return (
    <div>
      <h2>Raamatute nimekiri:</h2>
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => onBookClick(book.id)}>
            <p><strong>Pealkiri:</strong> {book.title}</p>
            <p><strong>Autor:</strong> {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList;
