import React, { useEffect, useState } from "react";
import { getBooks } from "../api/axiosClient";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "./BookList.css";

function Books() {

  const [books, setBooks] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [categories, setCategories] = useState([]);

  const userId = localStorage.getItem("UserId");


  const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    };
  };

  useEffect(() => {
    loadBooks();

    fetch("http://localhost:8080/backend/categories", {
      method: "GET",
      headers: getAuthHeader()
    })
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);


  //           LOAD BOOk
  const loadBooks = async () => {
    const res = await getBooks();
    setBooks(res);
  };


  const handleBorrow = async (e,bookId) => {
    e.stopPropagation();

    try {
      await fetch(`http://localhost:8080/backend/borrow?bookId=${bookId}`, {
        method: "POST",
        headers: getAuthHeader(),
      });
      alert("Mượn sách thành công!");
    } catch (err) {
      console.error("Lỗi mượn sách:", err);
      alert(
        "Không thể mượn sách: " +
        (err.response?.data?.message || "Lỗi hệ thống")
      );
    }
  };

  const searchBooks = (keyword, categoryId) => {

    let url = "http://localhost:8080/backend/books/search?";

    if (keyword) {
      url += `keyword=${keyword}&`;
    }

    if (categoryId) {
      url += `categoryId=${categoryId}`;
    }

    fetch(url, {
      headers: getAuthHeader()
    })
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
                onClick={(e) => handleBorrow(e,b.id)}
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