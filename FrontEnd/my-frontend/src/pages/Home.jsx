import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CategorySidebar from "../components/CategorySidebar";
import Banner from "../components/Banner";
import BookSection from "../components/BookSection";

function Home() {

  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8080/backend/books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.log(err));

    fetch("http://localhost:8080/backend/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.log(err));

  }, []);

  return (
    <div>

      <Header />

      <Navbar />

      <div style={{ display: "flex" }}>
        <CategorySidebar categories={categories} />
        <Banner />
      </div>

      <BookSection books={books} />

    </div>
  );
}

export default Home;