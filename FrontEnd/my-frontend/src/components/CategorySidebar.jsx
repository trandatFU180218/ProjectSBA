import React from "react";
import "./components.css";

function CategorySidebar({ categories }) {
  return (
    <div className="category-sidebar">
      {categories.map((c) => (
        <div key={c.id} className="category-item">
          {c.name}
        </div>
      ))}
    </div>
  );
}

export default CategorySidebar;