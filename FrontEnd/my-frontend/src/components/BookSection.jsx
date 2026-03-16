import React from "react";
import BookCard from "./BookCard";
import "./components.css";

function BookSection({ title, books = [] }) {
  return (
    <div className="book-section">

      <h2>{title}</h2>

      <div className="book-grid">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>

    </div>
  );
}

export default BookSection;