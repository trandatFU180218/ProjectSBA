import React from "react";
import "./components.css";
import { borrowBook } from "../api/axiosClient"; // không cần viewBook ở đây
import { useNavigate } from "react-router-dom";

function BookCard({ book }) {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const handleBorrow = async (e) => {
    e.stopPropagation(); 

    if (!userId) {
      alert("Vui lòng đăng nhập để mượn sách!");
      navigate("/"); 
      return;
    }

    try {
      await borrowBook(userId, book.id);
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

      <p>Author: {book.author}</p>           {/* sửa typo */}
      <p>Category: {book.categoryName}</p>

      <button
        onClick={handleBorrow}               // ← truyền hàm trực tiếp
        className="borrow-btn"
      >
        Mượn sách ngay
      </button>
    </div>
  );
}

export default BookCard;