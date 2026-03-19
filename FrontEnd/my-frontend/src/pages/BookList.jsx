import React, { useEffect, useState } from "react";
import { getBooks, borrowBook } from "../api/axiosClient";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "./BookList.css";

function Books() {

  const [books, setBooks] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [categories, setCategories] = useState([]);

  const userId = localStorage.getItem("UserId");


  useEffect(() => {
    loadBooks();

    fetch("http://localhost:8080/backend/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const loadBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  const handleBorrow = async (bookId) => {
    await borrowBook(userId, bookId);
    alert("Borrow success");
  };

  const searchBooks = (keyword, categoryId) => {

    let url = "http://localhost:8080/backend/books/search?";

    if (keyword) {
      url += `keyword=${keyword}&`;
    }

    if (categoryId) {
      url += `categoryId=${categoryId}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setBooks(data));

  };

  const handleSearch = (keyword) => {
    setKeyword(keyword);
    searchBooks(keyword, categoryId);
  };

  const handleFilter = (id) => {
    setCategoryId(id);
    searchBooks(keyword, id);
  };

  return (
    <div className="books-container">
      <Header onSearch={handleSearch} />
      <Navbar categories={categories} onFilter={handleFilter} />

      <h2>Books</h2>

      {books.length === 0 ? (
        <div className="no-books">Không tìm thấy sách nào...</div>
      ) : (
        <div className="booklist-grid">
          {books.map((b) => (
            <div key={b.id} className="book-card">
              <img src={b.imageUrl} alt={b.title} />
              <div className="book-info">
                <h3 className="book-title">{b.title}</h3>
                <p className="book-author">{b.author}</p>
              </div>
              <button
                className="borrow-btn"
                onClick={() => handleBorrow(b.id)}
              >
                Mượn sách ngay
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;