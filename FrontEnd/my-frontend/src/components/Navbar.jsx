import React from "react";
import "./components.css";
import CategorySidebar from "./CategorySidebar";
import { useNavigate } from "react-router-dom";

function Navbar({ categories, onFilter }) {
  const navigate = useNavigate();
  return (
    <div className="navbar">

      <span onClick={()=>navigate("/Home")}>Home</span>

      <span onClick={()=>navigate("/books")}>Books</span>

      <CategorySidebar 
        categories={categories}
        onFilter={onFilter}
      />

      <span>Review sách</span>

      <span>My Books</span>

      <span>Profile</span>

    </div>
  );
}

export default Navbar;