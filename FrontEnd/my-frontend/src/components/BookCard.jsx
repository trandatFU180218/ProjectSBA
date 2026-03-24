import React from "react";
import "./components.css";

import { useNavigate } from "react-router-dom";

function BookCard({ book }) {
  const navigate = useNavigate();

  const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    };
  };

  const handleBorrow = async (e) => {
    e.stopPropagation();

    try {
      await fetch(`http://localhost:8080/backend/borrow?bookId=${book.id}`,{
        method:"POST",
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

  const handleView = () => {
    navigate(`/bookDetail/${book.id}`);
  };

  return (
    <div
      className="home-book-card"
      onClick={handleView}
      style={{ cursor: "pointer" }}
    >
      <img src={book.imageUrl} alt={book.title} />

      <h4>{book.title}</h4>

      <p>Author: {book.author}</p>
      <p>Category: {book.categoryName}</p>

      <button
        onClick={handleBorrow}
        className="borrow-btn"
      >
        Mượn sách ngay
      </button>
    </div>
  );
}

export default BookCard;