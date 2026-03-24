import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BookSection from "../components/BookSection";
import Footer from "../components/Footer";

function Home() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  const [keyword, setKeyword] = useState("");
  const [categoryId, setCategoryId] = useState(null);

  const [cate6Books, setCate6Books] = useState([]);
  const [cate7Books, setCate7Books] = useState([]);
  const [cate8Books, setCate8Books] = useState([]);
  const [cate9Books, setCate9Books] = useState([]);

  const navigate = useNavigate();

  // LẤY TOKEN
  const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    };
  };

  // SEARCH + FILTER
  const searchBooks = (keyword, categoryId) => {
    let params = [];

    if (keyword) params.push(`keyword=${keyword}`);
    if (categoryId) params.push(`categoryId=${categoryId}`);

    let url = "http://localhost:8080/backend/books/search";
    if (params.length > 0) url += "?" + params.join("&");

    fetch(url, {
      headers: getAuthHeader()
    })
      .then(res => {
        if (res.status === 401) {
          navigate("/");
        }
        return res.json();
      })
      .then(data => setBooks(data));
  };

  const handleSearch = (kw) => {
    setKeyword(kw);
    searchBooks(kw, categoryId);
  };

  const handleFilter = (id) => {
    setCategoryId(id);
    searchBooks(keyword, id);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    // 📚 Books
    fetch("http://localhost:8080/backend/books?page=0&size=10", {
      headers: getAuthHeader()
    })
      .then(res => {
        if (res.status === 401) navigate("/");
        return res.json();
      })
      .then(data => setBooks(data.content || data));

    // Categories
    fetch("http://localhost:8080/backend/categories", {
      headers: getAuthHeader()
    })
      .then(res => res.json())
      .then(data => setCategories(data));

    // Category sections
    fetch("http://localhost:8080/backend/books/category/6?page=0&size=5", {
      headers: getAuthHeader()
    })
      .then(res => res.json())
      .then(data => setCate6Books(data));

    fetch("http://localhost:8080/backend/books/category/7?page=0&size=5", {
      headers: getAuthHeader()
    })
      .then(res => res.json())
      .then(data => setCate7Books(data));

    fetch("http://localhost:8080/backend/books/category/8?page=0&size=5", {
      headers: getAuthHeader()
    })
      .then(res => res.json())
      .then(data => setCate8Books(data));

    fetch("http://localhost:8080/backend/books/category/9?page=0&size=5", {
      headers: getAuthHeader()
    })
      .then(res => res.json())
      .then(data => setCate9Books(data));

  }, [navigate]);

  return (
    <div>

      <Header onSearch={handleSearch} />

      <Navbar
        categories={categories}
        onFilter={handleFilter}
      />

      <div style={{ display: "flex", gap: "20px" }}>
        <Banner />
      </div>

      <BookSection title="Gợi ý cho bạn" books={books} />

      <BookSection title="Khoa học viễn tưởng" books={cate6Books} />
      <BookSection title="Phiêu lưu" books={cate7Books} />
      <BookSection title="Self Help" books={cate8Books} />
      <BookSection title="Kinh tế" books={cate9Books} />

      <Footer />
    </div>
  );
}

export default Home;