import React, { useState } from 'react';
import './App.css';
import BooksList from './BooksList';
import AddBook from './AddBook';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Kevade', author: 'Oskar Luts', imageURL: 'https://vaimuvara.ee/wp-content/uploads/2021/01/Kevade-II-Oskar-Luts-1943-324x472.jpg' },
  ]);
  const [selectedBook, setSelectedBook] = useState(books[0]);

  const addBook = (title, author, imageURL) => {
    const newBook = {
      id: books.length + 1,
      title,
      author,
      imageURL
    };
    setBooks([...books, newBook]);
  };

  const handleBookClick = (id) => {
    const book = books.find(book => book.id === id);
    setSelectedBook(book);
  };

  return (
    <div className="container">
      <div className="books-list">
        <BooksList books={books} onBookClick={handleBookClick} />
        <AddBook addBook={addBook} />
      </div>

      <div className="book-details">
        {selectedBook && (
          <div className='book'>
            <h2>{selectedBook.title}</h2>
            <p><strong>Autor:</strong> {selectedBook.author}</p>
            <img src={selectedBook.imageURL} alt={selectedBook.title} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
