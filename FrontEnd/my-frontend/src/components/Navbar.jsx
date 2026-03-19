import React from "react";
import "./components.css";
import CategorySidebar from "./CategorySidebar";
import { useNavigate } from "react-router-dom";

function Navbar({ categories, onFilter }) {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  return (
    <div className="navbar">

      <span onClick={()=>navigate("/Home")}>Home</span>

      <span onClick={()=>navigate("/books")}>Books</span>

      <CategorySidebar 
        categories={categories}
        onFilter={onFilter}
      />

      <span onClick={()=>navigate("/books")}>Review sách</span>

      <span onClick={()=>navigate("/my-books")}>My Books</span>

      <span onClick={()=>navigate(`/fines/${userId}`)}>Profile</span>

    </div>
  );
}

export default Navbar;