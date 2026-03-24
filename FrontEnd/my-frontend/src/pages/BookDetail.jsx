import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { viewBook } from '../api/axiosClient';
import './BookDetail.css';

function BookDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem("userId");

  const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    };
  };

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await viewBook(id);
        setBook(res.data);
      } catch (err) {
        setError('Không thể tải thông tin sách. Vui lòng thử lại sau.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <div className="loading">Đang tải...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!book) return <div className="not-found">Không tìm thấy sách</div>;
  
  const handleBorrow = async (e) => {
    e.stopPropagation();

    try {
      await fetch(`http://localhost:8080/backend/borrow?bookId=${book.id}`,{
        Headers: getAuthHeader(),
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

  return (
    <div className="book-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Quay lại
      </button>

      <div className="book-detail-card">
        <div className="book-image-section">
          <img
            src={book.imageUrl || 'https://via.placeholder.com/300x450?text=No+Image'}
            alt={book.title}
            className="book-detail-img"
          />
        </div>

        <div className="book-info-section">
          <h1 className="book-title">{book.title}</h1>

          <div className="book-meta">
            <p><strong>Tác giả:</strong> {book.author || 'Chưa cập nhật'}</p>
            <p><strong>Nhà xuất bản:</strong> {book.publisher || 'Chưa cập nhật'}</p>
            <p><strong>Năm xuất bản:</strong> {book.publishYear || 'Chưa cập nhật'}</p>
            <p><strong>ISBN:</strong> {book.isbn || 'Chưa có'}</p>
            <p>
              <strong>Thể loại:</strong>{' '}
              <span className="category-badge">
                {book.category?.name || 'Không thuộc thể loại'}
              </span>
            </p>
            <p><strong>Ngày tạo:</strong> {new Date(book.createdAt).toLocaleDateString('vi-VN')}</p>
          </div>

          <div className="book-description">
            <h3>Mô tả sách</h3>
            <p>{book.description || 'Chưa có mô tả chi tiết.'}</p>
          </div>

          <button className="borrow-btn-large" onClick={handleBorrow}>
            Mượn sách ngay
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;