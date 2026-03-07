import React from "react";
import BookCard from "./BookCard";
import "./components.css";

function BookSection({ books }) {
  return (
    <div className="book-section">
      <h2>TOP SÁCH BÁN CHẠY</h2>

      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookSection;