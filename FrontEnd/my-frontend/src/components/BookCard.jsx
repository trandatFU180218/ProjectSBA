import React from "react";
import "./components.css";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.imageUrl} alt={book.title} />

      <h4>{book.title}</h4>

      <p>Auhtor: {book.author}</p>
      <p>Category: {book.categoryName}</p>
    </div>
  );
}

export default BookCard;