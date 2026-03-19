import React, { useEffect, useState } from "react";
import { getMyBooks } from "../api/axiosClient";
import "./MyBook.css";  
import { useNavigate } from "react-router-dom";

function MyBook() {
  const [books, setBooks] = useState([]);
  const userId = localStorage.getItem("userId") ; 
  const navigate = useNavigate();

  useEffect(() => {
    loadMyBooks();
  }, []);

  const loadMyBooks = async () => {
    try {
      const res = await getMyBooks(userId);
      setBooks(res.data);
    } catch (err) {
      console.error("Lỗi tải sách đã mượn:", err);
    }
  };

  // const handleReturn = async (borrowDetailId) => {
  //   try {
  //     await returnBook(borrowDetailId);
  //     alert("Trả sách thành công!");
  //     loadMyBooks(); 
  //   } catch (err) {
  //     alert("Không thể trả sách: " + (err.response?.data || "Lỗi hệ thống"));
  //   }
  // };

  return (
    <div className="mybooks-container">
      <h2>My Books</h2>
      <button className="back-btn" onClick={() => navigate("/Home")}>
        ← Quay lại
      </button>

      {books.length === 0 ? (
        <div className="no-books">Bạn chưa mượn cuốn sách nào</div>
      ) : (
        <div className="my-books-grid">
          {books.map((b) => (
            <div key={b.borrowDetailId} className="my-book-card">
              <div className="book-info">
                <h3 className="book-title">{b.title}</h3>
                <p className="book-author">Author: {b.author}</p>

                <div className="book-dates">
                  <p className="borrow-date">Borrow Date: {b.borrowDate}</p>
                  <p className="due-date">Due Date: {b.dueDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBook;